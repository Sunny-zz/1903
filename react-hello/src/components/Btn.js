import React, { Component } from "react"
import PropTypes from "prop-types"
class Btn extends Component {
  render() {
    // 如何接收父组件传递的 props
    // 子组件默认有一个 props 属性该属性是一个对象，对象下就是 父组件传递的 属性和属性值
    console.log(this.props)
    const text = this.props.text
    return <button>{text}</button>
  }
}
export default Btn
// 做类型检查
Btn.propTypes = {
  text: PropTypes.string
}
// 设置默认值
Btn.defaultProps = {
  text: "默认按钮"
}
