import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/index.scss'
import '@/assets/iconfont/iconfont.css'

import { Loading, Pagination } from 'element-ui'

import highlight from '@/directive/highlight'

Vue.use(highlight)
Vue.use(Loading.directive).use(Pagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
