import Vue from "vue"
import VueRouter from "vue-router"

//懒加载
const Loading = () => import('views/loading/Loading')
const GameBody = () => import('views/countdown/GameBody')
const RedEnvRain = () => import('views/game/RedEnvRain')
const Award = () => import('views/award/Award')


//安装插件
Vue.use(VueRouter)

//创建router

const routes = [
  {
    path:'',
    redirect:'/loading'
  },
  {
    path:'/loading',
    component:Loading
  },
  {
    path:'/gamebody',
    component:GameBody
  },
  {
    path:'/redenvrain',
    component:RedEnvRain
  },
  {
    path:'/award',
    component:Award
  }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

export default router