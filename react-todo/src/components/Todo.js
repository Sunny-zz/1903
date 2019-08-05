import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoContent from "./TodoContent"
import TodoFoot from "./TodoFoot"
import axios from "axios"

class Todo extends Component {
  constructor() {
    super()
    console.log("生命周期函数 constructor")
  }
  state = {
    todos: [],
    type: "all"
  }
  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }
  add = (text, clear) => {
    // 添加 todo
    // 坚决不能直接修改 state
    const { todos } = this.state
    if (text.trim()) {
      axios
        .post("http://localhost:3008/todos", { text, isCompleted: false })
        .then(res => {
          console.log(res.data)
          this.setState({
            todos: [...todos, res.data]
          })
          clear()
        })
    } else {
      alert("请输入有效内容")
    }
  }
  completed = id => {
    const { todos } = this.state
    axios
      .patch(`http://localhost:3008/todos/${id}`, {
        isCompleted: !todos.find(todo => todo.id === id).isCompleted
      })
      .then(res => {
        this.setState({
          todos: todos.map(todo => {
            if (todo.id === id) {
              // res.data 是后台返回的新的对象(更新好之后)
              return res.data
            }
            return todo
          })
        })
      })
  }
  changeType = type => {
    this.setState({
      type: type
    })
  }
  del = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  componentDidMount() {
    console.log("生命周期函数 cdm")
    axios.get("http://localhost:3008/todos").then(res => {
      // console.log(res.data)
      this.setState({
        todos: res.data
      })
    })
  }
  render() {
    // 对 state 的计算,直接写到 render 函数内，但是一定要保证不能修改 state
    console.log("生命周期函数 render")
    const { todos, type } = this.state
    const currentTodos = todos.filter(todo =>
      type === "all"
        ? true
        : type === "active"
        ? !todo.isCompleted
        : todo.isCompleted
    )
    const activeNum = todos.filter(item => !item.isCompleted).length
    return (
      <div>
        <TodoForm add={this.add} />
        <TodoContent
          todos={todos}
          currentTodos={currentTodos}
          del={this.del}
          completed={this.completed}
        />
        <TodoFoot activeNum={activeNum} changeType={this.changeType} />
      </div>
    )
  }
}
export default Todo
