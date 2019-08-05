import React, { Component } from "react"
class Todo extends Component {
  state = {
    todos: [],
    text: "",
    type: "active"
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
    const { todos, text, type } = this.state
    const currentTodos = todos.filter(todo =>
      type === "all"
        ? true
        : type === "active"
        ? !todo.isCompleted
        : todo.isCompleted
    )
    const content = todos.length ? (
      <ul>
        {currentTodos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
                userSelect: "none"
              }}
              onClick={() => this.completed(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => this.del(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    ) : (
      <div>请添加todo</div>
    )
    const activeNum = todos.filter(item => !item.isCompleted).length
    return (
      <div>
        <input type='text' value={text} onChange={this.handleInput} />
        <button onClick={this.add}>提交</button>
        {content}
        <div>
          <span>
            {activeNum} item{activeNum === 1 ? "" : "s"} left
          </span>
          {/* <button
            onClick={() =>
              this.setState({
                type: "all"
              })
            }
          >
            all
          </button> */}
          <button onClick={() => this.changeType("all")}>all</button>
          <button onClick={() => this.changeType("active")}>active</button>
          <button onClick={() => this.changeType("completed")}>
            completed
          </button>
        </div>
      </div>
    )
  }
}
export default Todo
