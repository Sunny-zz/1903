import React, { Component } from "react"
import { Route } from "react-router-dom"
import List from "./List"
import Topic from "./Topic"
class Main extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={List} />
        <Route path='/topic/:id' component={Topic} />
      </div>
    )
  }
}
export default Main
