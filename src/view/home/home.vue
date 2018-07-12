<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <div class="articleList" v-loading="loading">
          <excerpt v-for="article in ArticleList" :key="article._id" :articleData="article"></excerpt>
        </div>
        <el-pagination v-if="ArticleList.length > 0" class="pagination" layout="prev,pager,next" :total="pageTotal" background @current-change="changePage"  :current-page.sync="page"></el-pagination>
      </div>
      <div class="sidebar">
        <category @clickCategory="go"></category>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
import Excerpt from '@/components/excerpt/excerpt'
import Category from '@/components/category/category'
export default {
  components: {
    Excerpt,
    Category
  },
  data () {
    return {
      loading: true,
      ArticleList: [],
      pageTotal: 0,
      page: 1,
      limit: 10
    }
  },
  mounted () {
    if (this.$route.query.category) {
      this.getArticleListByCategory(this.$route.query.category)
    } else {
      this.getArticleList()
    }
  },
  metaInfo () {
    return {
      title: 'Lolo-web前端技术文章分享'
    }
  },
  methods: {
    async getArticleList () {
      try {
        let json = await api.getArticleList({
          page: this.page,
          limit: this.limit
        })
        this.pageTotal = json.data.articleCount
        this.ArticleList = json.data.list
        this.loading = false
      } catch (err) {
        console.error('文章列表获取失败:' + err)
      }
    },
    async getArticleListByCategory (category) {
      try {
        let json = await api.getArticleListByCategory({
          category,
          page: this.page,
          limit: this.limit
        })
        this.pageTotal = json.data.articleCount
        this.ArticleList = json.data.list
        this.loading = false
      } catch (err) {
        console.error('文章列表获取失败:' + err)
      }
    },
    go (category) {
      this.$router.push({path: `/articleList`, query: {category}})
    },
    changePage (page) {
      this.page = page
      if (this.$route.query.category) {
        this.getArticleListByCategory(this.$route.query.category)
      } else {
        this.getArticleList()
      }
    }
  },
  watch: {
    '$route' () {
      if (this.$route.query.category) {
        this.getArticleListByCategory(this.$route.query.category)
      } else {
        this.getArticleList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    .content {
      padding: 20px;
      .articleList {
        min-height: 96px;
        box-shadow: 5px 5px 10px #ccc;
      }
      .pagination {
        text-align: center;
        margin-top: 20px;
      }
    }
    .sidebar {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      width: 360px;
    }
  }
  @media (min-width: 1200px) {
    .content {
      margin-right: 380px;
      padding: 0 !important;
    }
    .sidebar {
      display: block !important;
    }
  }
</style>
