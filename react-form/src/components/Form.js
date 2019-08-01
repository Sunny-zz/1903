import React, { Component } from "react"
class Form extends Component {
  state = {
    username: "",
    comment: "",
    value: "lime",
    isAgree: false
  }
  // changeUsername = event => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  change = (stateName, event) => {
    // const cat = {
    //   name: '小花'
    // }
    // const a = 'name'
    // cat[a]
    const target = event.target
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value

    this.setState({
      [stateName]: targetValue
    })
    // const partialState = {}
    // partialState[stateName] = targetValue
    // this.setState(partialState)
  }
  render() {
    const { username, comment, value, isAgree } = this.state
    // render 函数在组件出现的时候和组件的 state 更新之后会触发
    console.log(
      "username:" + username,
      "comment:" + comment,
      "value: " + value,
      "isAgree: " + isAgree
    )
    return (
      <div className='form'>
        <label>用户名:</label>
        <input
          type='text'
          value={username}
          onChange={event => this.change("username", event)}
        />
        <br />
        <br />
        <textarea
          cols='30'
          rows='10'
          value={comment}
          onChange={event => this.change("comment", event)}
        />
        <br />
        <br />
        <h2>选择你喜欢的风味:</h2>
        <select value={value} onChange={event => this.change("value", event)}>
          <option value='grapefruit'>葡萄柚</option>
          <option value='lime'>酸橙</option>
          <option value='coconut'>椰子</option>
          <option value='mango'>芒果</option>
        </select>
        <br />
        <br />
        <input
          type='checkbox'
          checked={isAgree}
          onChange={event => this.change("isAgree", event)}
        />
        <label>是否同意霸王条款</label>
      </div>
    )
  }
}
export default Form
