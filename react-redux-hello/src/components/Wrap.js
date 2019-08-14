import React, { Component } from "react"
import Count from "./Count"
import CountCopy from "./CountCopy"
import { connect } from "react-redux"
import store from "../store"
import axios from "axios"
class Wrap extends Component {
  componentDidMount() {
    axios.get("http://localhost:3008/address").then(res => {
      setTimeout(() => {
        store.dispatch({ type: "GETADDRESS", newAddress: res.data })
      }, 1000)
    })
  }
  updateAddress = () => {
    // 更新 store 内的数据 要使用 store 的 dispatch 方法发出 action
    axios
      .patch("http://localhost:3008/address", {
        jiedao: "xxxxxxxxx",
        detail: "x11111  22  2 2"
      })
      .then(res => {
        store.dispatch({
          type: "UPDATEADDRESS",
          newAddress: res.data
        })
      })
  }
  render() {
    const { count, address } = this.props
    // 由于 Count  CountCopy 组件都需要使用 store 中的数据
    // 所以我们在父组件 Wrap 去动态获取 store 中的数据(什么叫动态获取: store 数据改变 组件间内的东西也变，并不是使用getState)
    // 在 react-redux 包中拿 connect 方法
    // connect 是一个高阶函数需要调用两次  connect()()
    // 第一次调用需要接收一个函数作为参数 这个函数被叫做 mapStateToProps  将 store 中的 state 映射成该组件的 props
    // 这个mapStateToProps函数默认接受一个 state 作为参数, 该参数指的就是 store 中的 state,mapStateToProps函数还必须返回一个对象 这个对象就是作为组件的 props
    // 第二次调用需要接收一个组件作为参数，此次调用作用是将 mapStateToProps 函数的返回值当作 props 传递给组件并返回该组件
    // 所以组件的导出写成 export default connect(mapStateToProps)(Wrap)
    return (
      <div>
        <Count count={count} />
        <CountCopy />
        <h4>地址信息</h4>
        {address ? (
          <div>
            <span>城市: {address.city}</span>
            <br />
            <span>街道: {address.jiedao}</span>
            <br />
            <span>详细地址: {address.detail}</span>
          </div>
        ) : (
          <div>请稍等...</div>
        )}
        <button onClick={this.updateAddress}>更新地址信息</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
    address: state.address
  }
}
export default connect(mapStateToProps)(Wrap)
