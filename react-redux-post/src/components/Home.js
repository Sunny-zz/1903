import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getPosts } from "../store/actions"
import { bindActionCreators } from "redux"

class Home extends Component {
  componentDidMount() {
    // 组件内没有发出 action
    this.props.getPosts()
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
  // 输出了 store 中的数据
  // console.log(state)
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPosts: bindActionCreators(getPosts, dispatch)
  }
}
// 可以利用 mapDispatchToProps 将 action 创建函数附带上 dispatch 功能，这样的意思就是直接执行 action 创建函数默认触发 dispatch
// 下面的写法是 mapDispatchToProps 的语法糖
// 普通写法 参考 6 41-45 54-57
// export default connect(
//   mapStateToProps,
//   {getPosts}
// )(Home)

// 假如说你的组件内不需要 state 就需要 action 创建函数 写成下面的写法
//  export default connect(
//   null,
//   {getPosts,getComments}
// )(Home)

// 这样会把该 action 创建函数重新整理(带了 dispatch 会自动发 action)并且放到组件的 props 内
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
