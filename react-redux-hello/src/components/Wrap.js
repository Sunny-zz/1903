import React, { Component } from "react"
import Count from "./Count"
import CountCopy from "./CountCopy"
import { connect } from "react-redux"
class Wrap extends Component {
  render() {
    // 由于 Count  CountCopy 组件都需要使用 store 中的数据
    // 所以我们在父组件 Wrap 去动态获取 store 中的数据(什么叫动态获取: store 数据改变 组件间内的东西也变，并不是使用getState)
    // 在 react-redux 包中拿 connect 方法
    // connect 是一个高阶函数需要调用两次  connect()()
    // 第一次调用需要接收一个函数作为参数 这个函数被叫做 mapStateToProps  将 store 中的 state 映射成该组件的 props
    // 这个mapStateToProps函数默认接受一个 state 作为参数, 该参数指的就是 store 中的 state,mapStateToProps函数还必须返回一个对象 这个对象就是作为组件的 props
    // 第二次调用需要接收一个组件作为参数，此次调用作用是将 mapStateToProps 函数的返回值当作 props 传递给组件并返回该组件
    // 所以组件的导出写成
    return (
      <div>
        <Count count={this.props.count} />
        <CountCopy />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Wrap)
