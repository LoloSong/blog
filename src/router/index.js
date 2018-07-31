import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/view/home/home')
const Nav = () => import('@/view/nav/nav')
const HotArticle = () => import('@/view/hotArticle/hotArticle')
const Article = () => import('@/view/article/article')

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
