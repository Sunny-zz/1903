import React, { Component } from "react"
class Topic extends Component {
  state = {
    title: ""
  }
  // 获取动态路由参数
  componentDidMount() {
    if (
      this.props.match.params.id !== "hot" &&
      this.props.match.params.id !== "hottest" &&
      this.props.match.params.id !== "new"
    ) {
      this.props.history.push("/error")
    } else {
      this.setState({
        title: this.props.match.params.id
      })
    }
  }
  // 当路由地址改变的时候组件接收到的 props 发生了改变，此时 cdu 会执行，但是 cdu 不能直接的修改 state ，修改state必须包裹在条件语句内
  // 所以 我们以之前的 props 和 现在 props 作比较更新 state
  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // console.log(this.props)
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        title: this.props.match.params.id
      })
    }
  }
  render() {
    return <div>{this.state.title}文章列表页</div>
  }
}
export default Topic
