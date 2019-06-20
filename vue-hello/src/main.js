import Vue from "vue"
// 导入 整个 App 组件
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
