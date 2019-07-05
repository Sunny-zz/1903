import Vue from "vue"

import App from "./App.vue"
import "./assets/glocal.css"
import "./elementui"
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
