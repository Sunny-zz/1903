import React, { Component } from "react"
import store from "../store"
class Count extends Component {
  render() {
    // 如何获取 store 内的数据
    console.log(store.getState())
    const { count } = store.getState()
    return (
      <div>
        <h2>组件1</h2>
        <button>-</button>
        <span>{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
      </div>
    )
  }
}
export default Count
