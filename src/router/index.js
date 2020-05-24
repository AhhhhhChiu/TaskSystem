import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/view/Login")
    },
    {
      path: '/main',
      name: 'main',
      component: () => import("@/view/Main"),
      redirect: "/home",
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import("@/components/Home")
        },
        {
          path: '/search',
          name: 'search',
          component: () => import("@/components/Search")
        },

        {
          path: '/shop',
          name: 'shop',
          component: () => import("@/components/Shop")
        },
        {
          path: '/user',
          name: 'user',
          component: () => import("@/components/User")
        },
        {
          path: '/post',
          name: 'post',
          component: () => import("@/components/Post")
        },
        {
          path: '/shopmanager',
          name: 'shopmanager',
          component: () => import("@/components/ShopManager")
        },
      ]
    },
  ],
  // mode: 'history'
})
