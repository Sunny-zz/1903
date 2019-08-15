import React from "react"
const PostBody = props => {
  const { post } = props
  return props.post ? (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  ) : (
    <div>稍等。。。</div>
  )
}
export default PostBody
