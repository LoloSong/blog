import Vue from 'vue'
import App from './App'
import MetaInfo from 'vue-meta-info'
import router from './router'

import '@/assets/css/index.scss'
import '@/assets/iconfont/iconfont.css'

import { Row, Col, Loading, Pagination, Card } from 'element-ui'

import highlight from '@/directive/highlight'

Vue.use(MetaInfo)
Vue.use(highlight)
Vue.use(Loading.directive).use(Pagination).use(Card).use(Row).use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
