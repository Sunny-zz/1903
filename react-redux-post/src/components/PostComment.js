import React, { Component } from "react"
import { connect } from "react-redux"
import { addComment } from "../store/actions"
class PostComment extends Component {
  state = {
    val: ""
  }
  addComment = () => {
    // 1. 发送请求添加远端的评论
    // 2. 将网上更新好的在本地展示
    const { val } = this.state
    if (val.trim()) {
      this.props.addComment({ text: val, postId: this.props.postId }, () =>
        this.setState({ val: "" })
      )
    }
  }
  // delComment = id => {

  // }
  render() {
    const { comments } = this.props
    const commentList = comments.length ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => this.delComment(comment.id)}>删除</button>
          </li>
        ))}
      </ul>
    ) : (
      "请稍等。。。"
    )
    return (
      <div>
        <h4>评论</h4>
        {commentList}
        <textarea
          onKeyDown={event => {
            if (event.which === 13) {
              this.addComment()
            }
          }}
          value={this.state.val}
          onChange={event =>
            this.setState({
              val: event.target.value
            })
          }
        />
        <button onClick={this.addComment}>添加评论</button>
      </div>
    )
  }
}
export default connect(
  null,
  { addComment }
)(PostComment)
