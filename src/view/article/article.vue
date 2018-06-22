<template>
  <div class="article">
    <div class="container">
      <div class="content" v-loading="loading">
        <header class="content-title">
          <h1>{{articleData.title}}</h1>
          <div class="meta" v-if="articleData.created">
            <time><i class="iconfont icon-time"></i>{{articleData.created | formatTime}}</time>
            <span><i class="iconfont icon-eye"></i>阅读量({{articleData.views}})</span>
            <span><i class="iconfont icon-fenlei"></i>{{articleData.category}}</span>
          </div>
        </header>
        <div class="content-article" v-html="articleData.contentToMarked" v-highlight></div>
      </div>
      <div class="sidebar">
        <category @clickCategory="go"></category>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/filters/time'
import api from '@/api/api'
import Category from '@/components/category/category'

const OK = 0

export default {
  components: {
    Category
  },
  data () {
    return {
      loading: true,
      articleData: {
        title: '',
        created: '',
        views: '',
        category: '',
        contentToMarked: ''
      }
    }
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      try {
        let json = await api.getArticle(this.$route.params.id)
        if (json.code === OK) {
          this.articleData = json.data
          this.loading = false
        }
      } catch (err) {
        console.error('文章信息获取失败:' + err)
      }
    },
    go (category) {
      this.$router.push({path: `/articleList`, query: {category}})
    }
  },
  filters: {
    formatTime
  }
}
</script>

<style lang="scss" scoped>
.container{
  .content {
    box-shadow: 5px 5px 10px #ccc;
    padding: 16px;
    border: 1px solid #eaeaea;
    background: #fff;
    .content-title {
      margin-bottom: 16px;
      border-bottom: 1px solid #eaeaea;
      h1 {
        margin-bottom: 10px;
        text-align: center;
        font-size: 30px;
        color: #555;
      }
      .meta {
        margin-bottom: 10px;
        text-align: center;
        font-size: 12px;
        color: #999;
        i {
          font-size: 12px;
          margin-right: 2px;
        }
        time, span{
          margin-right: 10px;
        }
      }
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
@media (min-width: 768px) {
  .container {
    .content {
      margin: 0 20px;
    }
  }
}
@media (min-width: 1200px) {
  .container{
    .content {
      margin: 0 20px;
      margin-right: 380px;
      padding: 16px;
    }
    .sidebar {
      display: block;
    }
  }
}
</style>
