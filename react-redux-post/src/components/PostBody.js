import React from "react"
const PostBody = props => {
  const { post, comments } = props
  return props.post ? (
    <div>
      <h1>{post.title}</h1>
      <span>评论数:{comments.length}</span>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  ) : (
    <div>稍等。。。</div>
  )
}
export default PostBody
