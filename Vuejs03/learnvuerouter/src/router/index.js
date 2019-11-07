// 配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

// 1. 通过vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '/',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3. 将router对象传入到Vue实例
export default router