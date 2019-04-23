import Vue from 'vue'

//方便以对象方式操作cookie 访问cookie document.cookie
import Cookies from 'js-cookie' 

//消除浏览器差异
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

//全局样式
import '@/styles/index.scss' // global css

import App from './App'

//vuex
import store from './store'
//路由
import router from './router'

//引入国际化配置
import i18n from './lang' // Internationalization
import './icons' // icon

//引入导航守卫
import './permission' // permission control

import './utils/errorLog' // error log

//挂载自定义过滤器
import * as filters from './filters' // global filters

// //挂载mock 拦截请求
// import { mockXHR } from '../mock' // simulation data
 import ElementUI from 'element-ui';

// // mock api in github pages site build
// if (process.env.NODE_ENV === 'production') { mockXHR() }

Vue.use(Element, {
  //修改文本的大小
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//生产环境提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

