import React, { Component } from "react"
import store from "../store"
class CountCopy extends Component {
  render() {
    const { count } = store.getState()
    return (
      <div>
        <h2>组件2</h2>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
    )
  }
}
export default CountCopy
