import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Home from "./Home"
import About from "./About"
import "./main.css"
class Main extends Component {
  render() {
    const { location } = this.props
    console.log(location)
    return (
      <TransitionGroup className='main'>
        {/* CSSTransition 放在  TransitionGroup 内的时候  触发动画就不能使用 in 属性了 使用 key 属性*/}
        <CSSTransition
          key={location.pathname}
          classNames='main-fade'
          timeout={2000}
        >
          {/* 当需要做路动画的时候 需要两个路由在一段时间内同时存在 旧的路由消失 新的路由出现 */}
          {/* 要实现上述必须使用 Switch 而且  需要给 switch 加上 location 属性 这个属性的属性值一般都设置成 路由的 props 内的 location */}
          <Switch location={location}>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
export default withRouter(Main)
