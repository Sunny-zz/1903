import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoContent from "./TodoContent"
import TodoFoot from "./TodoFoot"

class Todo extends Component {
  state = {
    todos: [
      {
        id: "122",
        text: "123123",
        isCompleted: false
      }
    ],
    type: "all"
  }
  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }
  add = () => {
    // 添加 todo
    // 坚决不能直接修改 state
    const { todos, text } = this.state
    if (text.trim()) {
      this.setState({
        todos: [
          ...todos,
          { id: new Date().getTime(), text, isCompleted: false }
        ],
        text: ""
      })
    } else {
      alert("请输入有效内容")
    }
  }
  completed = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        // const obj = {
        //   a: 10,
        //   b: 20,
        //   c: false
        // }
        // obj.c = true
        // console.log(obj)
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
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
  render() {
    // 对 state 的计算,直接写到 render 函数内，但是一定要保证不能修改 state
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
        <div>
          {/* <span>
            {activeNum} item{activeNum === 1 ? "" : "s"} left
          </span> */}
          {/* <button
            onClick={() =>
              this.setState({
                type: "all"
              })
            }
          >
            all
          </button> */}
          {/* <button onClick={() => this.changeType("all")}>all</button>
          <button onClick={() => this.changeType("active")}>active</button>
          <button onClick={() => this.changeType("completed")}>
            completed
          </button> */}
        </div>
        <TodoForm />
        <TodoContent
          todos={todos}
          currentTodos={currentTodos}
          del={this.del}
          completed={this.completed}
        />
        <TodoFoot />
      </div>
    )
  }
}
export default Todo
