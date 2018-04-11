import main from '../components/main'
import login from '../components/login'
import Router from  'vue-router'
import Vue from 'vue'
import store from '../store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    {
      path: '/login',
      component: login
    },
    {
      path: '/main',
      meta: {
        requireAuth: true,
      },
      component: main,
    }
  ]
})
// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if(store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})
export default router
