import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/home'
import Nav from '@/view/nav/nav'
import HotArticle from '@/view/hotArticle/hotArticle'
import Article from '@/view/article/article'

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
      path: '/hotArticle',
      name: 'hotArticle',
      component: HotArticle
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
