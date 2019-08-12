// 在 redux 包内导出一个方法 createStore 用来创建 store
import { createStore } from "redux"
// createStore 方法需要接收一个函数作为参数  该函数被叫做 reducer 函数
// reducer 函数会默认接收一个 state 作为参数，给该参数赋的值就是原始的 state，并且把该参数返回(return)
// 这样 createStore 方法执行的时候就会创建一个 store 了，reducer 函数内的 state 参数就是共享的 state，也就是 store 中的数据
const inititalState = {
  count: 10
}
// action 相当与之前 vue 的 mutation
// action 类型需要写成大写的
// 如何修改 store 中数据
// 通过 store下的 dispatch 方法发 action
// 如何使用 dispatch 发 action
// store.dispatch({type:'ADD',payload: '载荷数据(更新state要用的)'})
const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD":
      console.log("触发了 ADD 类型的 action")
      state.count = state.count + 1
      return state
    default:
      return state
  }
}
const store = createStore(rootReducer)
export default store
// export default createStore((state={count:0})=> state)
