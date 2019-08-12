import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "../Home/Home"
import ProjectIndex from "../ProjectIndex/ProjectIndex"
import Tree from "../Tree/Tree"
import "./main.css"
class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Route path='/' exact component={Home} />
        <Route path='/index' component={Home} />
        <Route path='/pindex' component={Home} />
        <Route path='/projectindex' component={ProjectIndex} />
        <Route path='/tree' component={Tree} />
      </div>
    )
  }
}
export default Main
