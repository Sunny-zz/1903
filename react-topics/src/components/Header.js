import React, { Component } from "react"
import "./header.scss"
import styled from "styled-components"
class Header extends Component {
  state = {}
  render() {
    return (
      <header>
        <img src='https://www.vue-js.com/public/images/vue.png' alt='' />
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

export default Header
