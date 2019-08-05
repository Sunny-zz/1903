// 该组件没有自己的state
// 一般写成无状态组件(函数式组件) 只用来做展示用
// 一般父组件内的计算过程无需写到子组件内，在父组件内计算完毕之后在传递给子组件
// 函数式组件如何获取 props ，函数的参数默认接收一个 props
import React from "react"
const TodoContent = props => {
  const { todos, currentTodos, del, completed } = props
  const content = todos.length ? (
    <ul>
      {currentTodos.map(todo => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
              userSelect: "none"
            }}
            onClick={() => completed(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => del(todo.id)}>删除</button>
        </li>
      ))}
    </ul>
  ) : (
    <div>请添加todo</div>
  )
  return <div>{content}</div>
}
export default TodoContent
