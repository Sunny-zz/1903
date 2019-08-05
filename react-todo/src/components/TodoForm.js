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
  render() {
    return (
      <div>
        <input
          onChange={this.handleInput}
          type='text'
          value={this.state.text}
        />
        {/* <button>提交</button> */}
      </div>
    )
  }
}
export default TodoForm
