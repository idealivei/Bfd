import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require([ '@/pages/home' ], resolve);
const User = resolve => require([ '@/pages/user' ], resolve);

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/user',
      component: User
    }
  ]
})
