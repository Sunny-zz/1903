import Vue from "vue"
import VueRouter from "vue-router"
import Posts from "./components/Posts"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Posts
    }
  ],
  mode: "history"
})
