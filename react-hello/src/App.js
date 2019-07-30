import React from "react"
import Button from "./components/Button"
import List from "./components/List"
import Btn from "./components/Btn"

// react 组件
// 组件名 必须首字母大写
// 1. 函数式组件(无状态组件  没有 state)  直接写一个函数 函数名首字母大写 该函数必须返回标签   并且默认导出该函数
// 2. react 组件 是使用 class 创建

// jsx 语法内 需要注意
// 1. class 名  className='xxxx'      label 的 for 写成  htmlFor
// 2. 标签内的属性使用 js 的话   例如   src={logo}    在标签之间写 js 使用 {}  例如  <span>{a}</span>
function App() {
  const bool = false
  // 把运算的逻辑都写在 return 之外
  return (
    <div className='App'>
      {/* {bool ? <h1>hello react</h1> : <h1>hello vue</h1>} */}
      <h1 style={{ display: bool ? "block" : "none" }}>hello react</h1>
      <h1 style={{ display: !bool ? "block" : "none" }}>hello vue</h1>
      <Button />
      <List />
      <h2>变成登录按钮</h2>
      <Btn text='登录' />
      <h2>变成注册按钮</h2>
      <Btn text='注册' />
      <h2>就要普通按钮</h2>
      <Btn />
    </div>
  )
}
export default App
