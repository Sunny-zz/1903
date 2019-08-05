import React, { Component } from "react"
class TodoForm extends Component {
  state = {
    text: ""
  }
  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }
  add = e => {
    // 获取按下的是键盘上哪一个钮
    // console.log(e.which)
    // console.log(e.key)
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.props.add(this.state.text)
    }
  }
  render() {
    // 如何绑定键盘事件
    return (
      <div>
        <input
          onChange={this.handleInput}
          type='text'
          value={this.state.text}
          onKeyDown={this.add}
        />
        <button onClick={() => this.props.add(this.state.text)}>提交</button>
      </div>
    )
  }
}
export default TodoForm
