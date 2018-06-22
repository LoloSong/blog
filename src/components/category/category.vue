<template>
  <div class="category">
    <h3>热门标签</h3>
    <div class="items" v-loading="loading">
      <span v-for="item in categoryData" :key="item._id" @click="getArticles(item.category)">{{item.category}}</span>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  data () {
    return {
      loading: true,
      categoryData: []
    }
  },
  mounted () {
    this.getcategoryData()
  },
  methods: {
    async getcategoryData () {
      // ajax获取数据
      let json = await api.getcategory()
      this.categoryData = json.data
      this.loading = false
    },
    getArticles (category) {
      this.$emit('clickCategory', category)
    }
  }
}
</script>

<style lang="scss" scoped>
  .category {
    overflow: hidden;
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #ccc;
    h3 {
      margin-bottom: 10px;
      padding: 10px 15px 10px;
      border-bottom: 1px solid #eaeaea;
      background: #fbfbfb;
      font-size: 18px;
      color: #666;
    }
    .items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      padding: 0 15px;
      min-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        box-sizing: border-box;
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 5px;
        padding: 5px 10px;
        background: #f6f6f6;
        height: 30px;
        width: 31%;
        cursor: pointer;
        transition: all .3s;
        &:hover {
          background: #8be4e0;
          color: #fff;
        }
        &.active {
          background: #8be4e0;
          color: #fff;
        }
      }
    }
  }
</style>
