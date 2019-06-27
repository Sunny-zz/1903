// 放项目的路由相关的配置
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Pins from "./components/Pins.vue"
import Topics from "./components/Topics.vue"
// 给 vue 项目安装路由功能
Vue.use(VueRouter)
// 创建路由
// 地址都是小写的
const routes = [
  {
    component: Home,
    //    / 的意思代表的服务器的根地址   在我们这就指的是   localhost:8080
    path: "/"
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    component: Topics,
    path: "/topics"
  }
]

const router = new VueRouter({
  routes,
  // 路由的模式  默认是 hash 模式(通过锚点切换组件)
  // 可以更改成 history 模式 完全高仿浏览器的历史记录
  mode: "history"
})

export default router
