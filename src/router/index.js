import Vue from 'vue'
import Router from 'vue-router'

// 组件
import App from '@/App'
import list from '@/views/list/index'
import edit from '@/views/edit/index'

// 页面组件
import htmlList from '@/components/htmLlist'
import spaList from '@/components/spaList'
import about from '@/components/about'

// 注册 vue-router
Vue.use(Router)

// 路由配置
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: App,
      redirect:'/edit',
      children: [
        {
          path: '/list',
          component: list,
          name: 'list',
          children: [
            {
              path: 'h5',
              component: htmlList
            }, {
              path: 'spa',
              component: spaList
            }, {
              path: 'about',
              component: about
            }
          ]
        },
        {
          path: '/edit',
          component: edit,
        },
      ]
    }
  ]
})
