import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Article from '@/view/article/article'
import HotArticle from '@/view/hotArticle/hotArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: Home
    },
    {
      path: '/hotArticle',
      name: 'hotArticle',
      component: HotArticle
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
