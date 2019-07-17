import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home"
import Post from "./components/Post"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/post/:id",
      component: Post
    }
  ],
  mode: "history"
})
