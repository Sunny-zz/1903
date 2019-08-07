// 我们称这个组件是存放路由的组件
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import About from "./About"
import Topics from "./Topics"
import Home from "./Home"
import Err from "./Err"
// 路由必须包裹在 react-router-dom 中的一个组件下(BrowserRouter：仿浏览器历史记录 或 HashRouter：通过锚点跳转)
// 只有 Router 包裹的组件内才能使用路由相关的东西
// 一个项目只能存在一个 Router
const Main = () => {
  return (
    <div>
      {/* 路由 path 的匹配规则是包含匹配 */}
      {/* Switch 下的 Route 只能选择一个匹配，前面的匹配的就不匹配后面的 */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='/about' to='/newabout' />
        <Route path='/newabout' component={About} />
        <Route path='/topics' component={Topics} />
        <Route path='/error' component={Err} />
        <Route path='*' component={Err} />
      </Switch>
    </div>
  )
}
export default Main
