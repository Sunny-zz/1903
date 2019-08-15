import React, { Component } from "react"
import PostBody from "./PostBody"
import PostComment from "./PostComment"
import Axios from "axios"
class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    Axios.get(`http://localhost:3008/posts/${this.props.match.params.id}`).then(
      res => {
        this.setState({
          post: res.data
        })
      }
    )
  }
  render() {
    const { post } = this.state
    return (
      <div>
        <PostBody post={post} />
        <PostComment />
      </div>
    )
  }
}
export default Post
