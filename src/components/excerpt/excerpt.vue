<template>
  <div class="excerpt">
    <div style="cursor: pointer" @click="goArticleContent()">
      <h3>{{articleData.title}}</h3>
    </div>
    <div class="meta">
      <time v-if="articleData.created"><i class="iconfont icon-time"></i>{{articleData.created | formatTime}}</time>
      <span><i class="iconfont icon-eye"></i>阅读量({{articleData.views}})</span>
      <span><i class="iconfont icon-fenlei"></i>{{articleData.category}}</span>
    </div>
    <div class="describe">{{articleData.describe}}</div>
  </div>
</template>

<script>
import api from '@/api/api'
import { formatTime } from '@/filters/time'

const OK = 0

export default {
  props: {
    articleData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    async goArticleContent () {
      try {
        // 记录阅读量
        let json = await api.addViews(this.articleData._id)
        if (json.code === OK) {
          this.$router.push({path: `/article/${this.articleData._id}`})
        }
      } catch (err) {
        console.error('记录阅读量失败:' + err)
      }
    }
  },
  filters: {
    formatTime
  }
}
</script>

<style lang="scss" scoped>
  .excerpt {
    margin-bottom: -1px;
    padding: 10px;
    border: 1px solid #eaeaea;
    background: #fff;
    h3{
      margin-bottom: 5px;
      font-size: 18px;
      color: #222;
    }
    .meta {
      margin-bottom: 10px;
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
    .describe {
      font-size: 14px;
      color: #999;
    }
  }
</style>
