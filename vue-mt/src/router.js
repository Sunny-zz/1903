import Vue from "vue"
import VueRouter from "vue-router"

import Order from "./components/Order.vue"
import Comments from "./components/Comments.vue"
import Shop from "./components/Shop.vue"
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/order",
      component: Order
    },
    {
      path: "/comments",
      component: Comments
    },
    {
      path: "/shop",
      component: Shop
    }
  ],
  mode: "history"
})
