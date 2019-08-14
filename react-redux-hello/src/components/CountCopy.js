import React, { Component } from "react"
import { connect } from "react-redux"
class CountCopy extends Component {
  render() {
    const { count } = this.props
    return (
      <div>
        <h2>组件2</h2>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(CountCopy)
