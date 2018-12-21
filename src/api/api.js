import service from '@/utils/service'

export default {
  // 获取主页的文章列表
  async getArticleList ({page, limit}) {
    const data = await service({
      url: '/article/getArticleList',
      method: 'get',
      params: {
        page,
        limit
      }
    })
    return data.data
  },
  // 获取热门博文
  async gethotArticleList ({page, limit}) {
    const data = await service({
      url: '/article/getHotArticleList',
      method: 'get',
      params: {
        page,
        limit
      }
    })
    return data.data
  },
  async getArticleListByCategory ({
    category,
    page,
    limit
  }) {
    const data = await service({
      url: '/articleList/getArticleListByCategory',
      method: 'get',
      params: {
        category,
        page,
        limit
      }
    })
    return data.data
  },
  // 获取文章信息
  async getArticle (articleID) {
    const data = await service({
      url: '/article/getOneArticle',
      method: 'get',
      params: {
        articleID
      }
    })
    return data.data
  },
  // 增加阅读量
  async addViews (articleID) {
    const data = await service({
      url: '/article/addviews',
      method: 'post',
      data: {
        articleID
      }
    })
    return data.data
  },
  // 获取标签
  async getcategory () {
    const data = await service({
      url: '/category/getCategory',
      method: 'get'
    })
    return data.data
  },
  // 获取友情链接
  async getFriend () {
    const data = await service({
      url: '/friend/getFriend',
      method: 'get'
    })
    return data.data
  }
}
