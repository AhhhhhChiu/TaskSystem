import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import("@/view/RegLogin/RegLogin.vue"),
      redirect: "/login",
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import("@/view/RegLogin/Login")
        },
        {
          path: '/register',
          name: 'register',
          component: () => import("@/view/RegLogin/Register")
        },
      ]
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
          component: () => import("@/components/Home"),
          meta: {
            breadcrumb: ["主页", "任务中心"]
          }
        },
        {
          path: '/search',
          name: 'search',
          component: () => import("@/components/Search"),
          meta: {
            from: "search",
            breadcrumb: ["主页", "任务查询"]
          }
        },

        {
          path: '/shop',
          name: 'shop',
          component: () => import("@/components/Shop"),
          meta: {
            isExchanged: false,
            breadcrumb: ["主页", "积分商城"]
          }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import("@/components/User"),
          meta: {
            breadcrumb: ["主页", "个人中心", "我的主页"]
          }
        },
        {
          path: '/myTasks',
          name: 'myTasks',
          component: () => import("@/components/Search"),
          meta: {
            from: "myTasks",
            breadcrumb: ["主页", "个人中心", "我的任务"]
          }
        },
        {
          path: '/postTasks',
          name: 'postTasks',
          component: () => import("@/components/Search"),
          meta: {
            from: "postTasks",
            breadcrumb: ["主页", "管理员", "已发布任务"]
          }
        },
        {
          path: '/exchanged',
          name: 'exchanged',
          component: () => import("@/components/Shop"),
          meta: {
            isExchanged: true,
            breadcrumb: ["主页", "个人中心", "已兑清单"]
          }
        },
        {
          path: '/post',
          name: 'post',
          component: () => import("@/components/Post"),
          meta: {
            breadcrumb: ["主页", "管理员", "发布任务"]
          }
        },
        {
          path: '/shopmanager',
          name: 'shopmanager',
          component: () => import("@/components/ShopManager"),
          meta: {
            breadcrumb: ["主页", "管理员", "商城管理"]
          }
        },
      ]
    },
  ],
  // mode: 'history'
})
