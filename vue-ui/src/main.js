import Vue from "vue"

import App from "./App.vue"
import "./assets/glocal.css"
import "./assets/element-variables.scss"
import { Button, Carousel, CarouselItem } from "element-ui"
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  render: h => h(App)
}).$mount("#app")
