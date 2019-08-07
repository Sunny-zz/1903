import React, { Component } from "react"
import { Prompt } from "react-router-dom"
class About extends Component {
  render() {
    return (
      <div>
        about
        <Prompt when={true} message='Are you sure you want to leave?' />
      </div>
    )
  }
}
export default About
