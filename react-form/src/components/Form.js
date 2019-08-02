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
  log = event => {
    // const val = document.querySelector("input.inp").value
    // const val = event.target.value
    const val = this.inp.value
    console.log("非受控组件input 的值:" + val)
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
        <br />
        <br />
        <h2>非受控组件</h2>
        {/* 非受控组件如果要设置默认值的话 请不要设置 value  和 checked 以及 selected 属性，请设置 defaultValue  defaultChecked  defaultSelected*/}
        <input
          // ref 的值是一个函数(带箭头的) 该函数默认接收一个参数，该参数指的就是这个标签的真实 dom 节点,函数内把这个真实 dom 节点赋值给了 组件下的 inp 属性
          // 所以访问组件下的 inp 属性就是拿到了标签的真实 dom 节点
          // 这样的做法相当于创建了一个组件内的全局变量
          ref={inpDom => (this.inp = inpDom)}
          onChange={this.log}
          className='inp'
          type='text'
          defaultValue='哈哈哈'
        />
        <input type='checkbox' name='' id='' defaultChecked={true} />
      </div>
    )
  }
}
export default Form
