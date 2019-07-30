import React, { Component } from "react"
// react 类组件
//  class 类内 除了 satte 属性 之外只能写方法 中间不能加 逗号
// 类里面默认必须要写一个 render 方法 该方法必须返回一个 html 标签作为组件的 html 结构
// 类内的 state 成为组件的状态，类内使用状态   this.state
class Button extends Component {
  // 组件的状态
  // constructor() {
  //   super()
  //   this.state = {
  //     a: 10
  //   }
  //   // bind  call  apply
  //   this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    a: 0
  }
  handleClick = () => {
    // 如何修改 state
    this.setState({
      a: this.state.a + 1
    })
  }
  sub = () => {
    const { a } = this.state
    if (a > 0) {
      this.setState({
        a: a - 1
      })
    }
  }
  change = num => {
    this.setState({
      a: num
    })
  }
  jump = (num, e) => {
    e.preventDefault()
    console.log(num)
  }
  // react 组件内的事件绑定  首先在 class 内声明一个方法   然后给某一个标签的 onClick 属性绑定上这个方法
  render() {
    const { a } = this.state
    return (
      <div>
        <span>{a}</span>
        <br />
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.sub}>-</button>
        {/* 事件函数传参写法 */}
        <button
          onClick={() => {
            this.change(100)
          }}
        >
          100
        </button>
        <br />
        <a
          href='http://www.baidu.com'
          onClick={event => {
            this.jump(111, event)
          }}
        >
          百度
        </a>
      </div>
    )
  }
}
export default Button
