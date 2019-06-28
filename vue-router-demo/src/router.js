// 放项目的路由相关的配置
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Pins from "./components/Pins.vue"
import Topics from "./components/Topics.vue"
import Recommended from "./components/Recommended.vue"
import FrontEnd from "./components/FrontEnd.vue"
import BackEnd from "./components/BackEnd.vue"
import Post from "./components/Post.vue"
import Error from "./components/Error.vue"
// 给 vue 项目安装路由功能
Vue.use(VueRouter)
// 创建路由
// 地址都是小写的
// 路由的匹配规则是严格匹配
const routes = [
  {
    component: Home,
    //    / 的意思代表的服务器的根地址   在我们这就指的是   localhost:8080
    path: "/",
    // 子路由下的 path 开头不能加  /   子路由默认path 的开始是父路由的path
    // 例如 子路由的 path 写成了 'welcome/frontend'  ----->  localhost:8080/welcome/frontend
    // 当子路由的 path 写成空的时候就相当于父路由的 path
    children: [
      {
        path: "",
        component: Recommended
      },
      {
        path: "welcome/recommended",
        component: Recommended
      },
      {
        path: "welcome/frontend",
        component: FrontEnd
      },
      {
        path: "welcome/backend",
        component: BackEnd
      }
    ]
  },
  {
    component: Pins,
    path: "/pins"
  },
  {
    path: "/topics",
    redirect: "/newtopics"
  },
  {
    component: Topics,
    path: "/newtopics"
  },
  // 文章展示页  有很多页 但是只需要一个组件就够了 只不过组件内的数据不一样
  // 把该页面创建成动态页面     动态路由    path 的地址内有变量
  // 动态路径参数 以冒号开头
  {
    component: Post,
    path: "/post/:id"
  },
  // 当上述路由全部匹配失败 就要出 404 页面  出现404页面的地址有和多种情况
  // 所以 我们将 404 路由的path 写成 * 而且必须写在所有路由的最下面
  {
    component: Error,
    path: "*"
  }
]

const router = new VueRouter({
  routes,
  // 路由的模式  默认是 hash 模式(通过锚点切换组件)
  // 可以更改成 history 模式 完全高仿浏览器的历史记录
  mode: "history"
})

export default router
