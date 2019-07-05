import Vue from "vue"

import App from "./App.vue"
import "./assets/glocal.css"
import "./cube-ui"
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
