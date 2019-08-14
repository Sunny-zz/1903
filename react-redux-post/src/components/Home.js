import React, { Component } from "react"
import { connect } from "react-redux"
class Home extends Component {
  render() {
    const { posts } = this.props
    return <div>home</div>
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home)
