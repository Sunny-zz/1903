import React, { Component } from "react"
import Count from "./Count"
import CountCopy from "./CountCopy"
class Wrap extends Component {
  render() {
    return (
      <div>
        <Count />
        <CountCopy />
      </div>
    )
  }
}
export default Wrap
