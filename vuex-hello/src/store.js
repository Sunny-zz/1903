import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// 创建 store

const store = new Vuex.Store({
  state: {
    // state 的意思就是状态 ，里面储存的就是你想要共享的组件 data
    num: 0
  },
  // mutations 修改 state 的方法
  mutations: {
    // addNum 定义的是修改 state 中 num 数据的方法  mutations 函数默认接收一个参数 state(上面定义好的共享数据)，直接对该数据下的某条数据进行修改就是修改了共享数据
    addNum(state) {
      state.num++
    },
    // mutation 函数创建的时候只能带两个参数，其中第一个必须是 state，第二个是载荷数据，不能接受第三个参。所以说组件内调用 mutation 函数的时候想要传递多个参数是不行的，只能把多个参数合并成对象传递
    changeNum(state, Payload) {
      state.num = Payload.newNum + Payload.newNum1
    }
  }
})

export default store
