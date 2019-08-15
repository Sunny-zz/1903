import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { Link } from "react-router-dom"

class Home extends Component {
  componentDidMount() {
    console.log(this)
    axios.get("http://localhost:3008/posts").then(res => {
      setTimeout(() => {
        this.props.dispatch({ type: "GETPOSTS", newPosts: res.data })
      }, 1000)
    })
  }

  render() {
    const { posts } = this.props
    console.log(this.props)
    const content = posts.length ? (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等。。。</div>
    )
    return content
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home)
