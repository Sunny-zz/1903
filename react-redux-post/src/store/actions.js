import { GET_POSTS } from "./actionTypes"
import Axios from "axios"
// 创建一个异步的 action ，必须搭配 redux-thunk  或 redux-saga 使用
// 普通的 action 函数需要返回一个对象 {type: xxx,xxxx}
// 异步的 action 创建函数需要返回一个函数,该返回函数需要一个参数 dispatch,在该返回的函数内部可以直接发送异步请求,请求成功之后使用该 dispatch 发出 action
const getPosts = () => {
  // 这个 getPosts 函数由于会被 mapDispatchToProps 方法包装，包装之后内部就可以获取到 dispatch 函数了，当执行被包装的 action 创建函数时会把 dispatch 当作参数传递给被包装的 action 创建函数的返回值得参数
  return dispatch => {
    Axios.get("http://localhost:3008/posts").then(res => {
      dispatch({ type: GET_POSTS, newPosts: res.data })
    })
  }
}
export { getPosts }
