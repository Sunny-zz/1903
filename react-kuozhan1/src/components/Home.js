import React, { Component } from "react"
import { CSSTransition } from "react-transition-group"
import "./home.css"
class Home extends Component {
  state = {
    show: false
  }
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "60vh",
          backgroundColor: "red"
        }}
      >
        <button
          type='button'
          onClick={() =>
            this.setState({
              show: !this.state.show
            })
          }
        >
          Click to Enter
        </button>
        <CSSTransition in={this.state.show} timeout={200} classNames='fade'>
          <div className='text'>{"I'll receive my-node-* classes"}</div>
        </CSSTransition>
      </div>
    )
  }
}
export default Home
