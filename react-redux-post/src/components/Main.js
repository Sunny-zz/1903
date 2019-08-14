import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "./Home"
import Post from "./Post"
class Main extends Component {
  render() {
    // reatc 中的 Fragments
    // 允许你导出多个节点
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
      </>
    )
  }
}
export default Main
