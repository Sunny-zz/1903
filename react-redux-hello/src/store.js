// 在 redux 包内导出一个方法 createStore 用来创建 store
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
// createStore 方法需要接收一个函数作为参数  该函数被叫做 reducer 函数
// reducer 函数会默认接收一个 state 作为参数，给该参数赋的值就是原始的 state，并且把该参数返回(return)
// 这样 createStore 方法执行的时候就会创建一个 store 了，reducer 函数内的 state 参数就是共享的 state，也就是 store 中的数据

// redux 的中间件  redux-logger 作用是当你更改 store 中的数据的时候，帮你在控制台输出记录
// 如何使用  需要在 redux 中导出一个方法 applyMiddleware 在创建 store 的时候使用该方法给 store 添加上中间件功能
const inititalState = {
  count: 100,
  address: null
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
      // 不可以对 state 直接进行修改   原因是由于 redux 要求不变性()
      // 保证不修改原来的 state 返回新的 state
      return { ...state, count: state.count + 1 }
    case "SUB":
      return { ...state, count: state.count - 1 }
    case "CHANGE":
      return {
        ...state,
        count: action.newCount
      }
    case "GETADDRESS":
      return {
        ...state,
        address: action.newAddress
      }
    case "UPDATEADDRESS":
      const { newAddress } = action
      return {
        ...state,
        address: { ...state.address, ...newAddress }
      }
    default:
      return state
  }
}
const store = createStore(rootReducer, applyMiddleware(logger))
export default store
// export default createStore((state={count:0})=> state)
