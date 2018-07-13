<template>
  <el-card shadow="hover" class='card'>
    <a :href="href" target="_blank">{{title}}</a>
    <br/>
    <span><slot>知识比较全面，易于新手学习和文档参考。</slot></span>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'lolosong'
    },
    href: {
      type: String,
      default: 'https://www.lolosong.com/'
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    a {
      padding: 1px 0;
      font-weight: bold;
      color: #1cdbee;
      &:hover {
        color: #318df0;
        border-bottom: 2px solid #318df0;
      }
    }
    span {
      font-size: 12px;
      color: #aaa;
    }
  }
</style>
