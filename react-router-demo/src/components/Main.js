// 我们称这个组件是存放路由的组件

import React from "react"
import { Route } from "react-router-dom"
import About from "./About"
import Users from "./Users"
import Home from "./Home"
// 路由必须包裹在 react-router-dom 中的一个组件下(BrowserRouter：仿浏览器历史记录 或 HashRouter：通过锚点跳转)
// 只有 Router 包裹的组件内才能使用路由相关的东西
// 一个项目只能存在一个 Router
const Main = () => {
  return (
    <div>
      {/* 路由 path 的匹配规则是包含匹配 */}
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/users' component={Users} />
    </div>
  )
}
export default Main
