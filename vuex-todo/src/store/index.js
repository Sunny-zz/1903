import Vue from "vue"
import Vuex from "vuex"
import todos from "./modules/todos"
import filter from "./modules/filter"
import logger from "vuex/dist/logger"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    val: "123",
    text: "测试"
  },
  mutations: {
    changeVal(state, newVal) {
      state.val = newVal
    },
    clearInput(state) {
      state.val = ""
    },
    changeText(state, newText) {
      state.text = newText
    }
  },
  modules: {
    todos,
    filter
  },
  plugins: [logger()]
})
