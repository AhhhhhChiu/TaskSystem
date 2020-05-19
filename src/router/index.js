import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      ]
    },
  ]
})
