import Vue from "vue"
import VueRouter from "vue-router"
import Topic from "./components/Topic.vue"
import Home from "./components/Home.vue"
import Pins from "./components/Pins.vue"
import HuaTi from "./components/HuaTi.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/pins",
      component: Pins
    },
    {
      path: "/huati",
      component: HuaTi
    },
    {
      path: "/topic/:id",
      component: Topic
    }
  ],
  mode: "history"
})
