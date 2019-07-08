import Vue from "vue"

import App from "./App.vue"
import "./assets/glocal.css"
import "./elementui"
import router from "./router"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount("#app")
