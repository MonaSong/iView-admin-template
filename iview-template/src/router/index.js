import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/pages/Login.vue'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['@/components/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['@/pages/Dashbord.vue'], resolve)
        },
        {
          path: '/profile',
          component: resolve => require(['@/pages/Profile.vue'], resolve)
        }
      ]
    }
  ]
})
