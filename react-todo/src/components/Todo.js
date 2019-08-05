import React, { Component } from "react"
class Todo extends Component {
  state = {
    todos: [],
    text: ""
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
  render() {
    const { todos, text } = this.state
    const content = todos.length ? (
      <ul>
        {todos.map(todo => (
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
          </li>
        ))}
      </ul>
    ) : (
      <div>请添加todo</div>
    )
    return (
      <div>
        <input type='text' value={text} onChange={this.handleInput} />
        <button onClick={this.add}>提交</button>
        {content}
        <div>
          <span>0 item left</span>
          <button>all</button>
          <button>active</button>
          <button>completed</button>
        </div>
      </div>
    )
  }
}
export default Todo
