// 该组件没有自己的state
// 一般写成无状态组件(函数式组件) 只用来做展示用
import React from "react"
const TodoFoot = props => {
  return (
    <div>
      <span>
        {props.activeNum} item{props.activeNum === 1 ? "" : "s"} left
      </span>
      <button onClick={() => props.changeType("all")}>all</button>
      <button onClick={() => props.changeType("active")}>active</button>
      <button onClick={() => props.changeType("completed")}>completed</button>
    </div>
  )
}
export default TodoFoot
