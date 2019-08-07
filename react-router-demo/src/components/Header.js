import React, { Component } from "react"
import { withRouter } from "react-router-dom"
class Header extends Component {
  state = {}
  render() {
    console.log(this.props)
    /* 当你想在不是 路由组件(Route 内包裹的)之内使用 路由组件内的 props 下的东西(history,location,match)  可以使用路由提供的  withRouter  */
    // 我们的 Header 组件并不是路由组件，想要使用路由的一些 props 要不使用 Link 做跳转
    // 路由的默认 props 内的 history 下的 push 方法
    // withRouter 也是必须包裹在 Router 下才能使用
    return (
      <div>
        <h1 onClick={() => this.props.history.push("/")}>首页</h1>
        <span onClick={() => this.props.history.goBack()}>返回</span>
      </div>
    )
  }
}
export default withRouter(Header)
