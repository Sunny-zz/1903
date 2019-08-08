import React, { Component } from "react"
import "./header.scss"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
class Header extends Component {
  state = {}
  render() {
    return (
      <header>
        {/* <Link to='/'>
          <img src='https://www.vue-js.com/public/images/vue.png' alt='' />
          <Span>中文社区</Span>
        </Link> */}
        <img
          onClick={() => this.props.history.push("/")}
          src='https://www.vue-js.com/public/images/vue.png'
          alt=''
        />
        <Span>中文社区</Span>
      </header>
    )
  }
}
// 样式组件
const Span = styled.span`
  color: red;
  :hover {
    color: teal;
  }
`

export default withRouter(Header)
