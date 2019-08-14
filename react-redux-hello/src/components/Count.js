import React, { Component } from "react"
import store from "../store"
class Count extends Component {
  render() {
    // 如何获取 store 内的数据
    const { count } = this.props
    return (
      <div>
        <h2>组件1</h2>
        <button onClick={() => store.dispatch({ type: "SUB" })}>-</button>
        <span>{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
        <button
          onClick={() =>
            store.dispatch({
              type: "CHANGE",
              newCount: Math.floor(Math.random() * 200)
            })
          }
        >
          随便改，想改成多少是多少
        </button>
      </div>
    )
  }
}
export default Count
