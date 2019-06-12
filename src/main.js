import Vue from 'vue'
import Vuex from 'vuex'
import Mint from 'mint-ui'

import'mint-ui/lib/style.css'
import 'es6-promise/auto'

import Store from './vuex/store'

import App from './App'

import router from './router' // 引入路由配置

import * as directives from './directives'//自定义指令

// 注册 vue-router
Vue.use(Mint);
Vue.use(Vuex)

//
Object.keys(directives).forEach(
  k => Vue.directive(k, directives[k]))

new Vue({
  el: '#app',
  router,
  store: new Vuex.Store(Store),
  components: { App },
  template: '<App />'
});
