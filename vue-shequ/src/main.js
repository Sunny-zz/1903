import Vue from "vue"

import App from "./App.vue"
import "./assets/glocal.css"
import router from "./router"
import "./plugins/element"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount("#app")
