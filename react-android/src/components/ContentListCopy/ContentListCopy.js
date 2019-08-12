import React, { Component } from "react"
import InfiniteLoader from "react-infinite-loader"
import axios from "axios"
import "./content-list-copy.css"
class ContentList extends Component {
  state = {
    list: [],
    pageNum: 0
  }
  componentDidMount() {
    // 因为刚进入网站时路径是 '/' 没有动态路有参数，所以类型默认是  index
    const type = this.props.match.params.type || "index"
    console.log(type)
    axios
      .get(`/api/article/${type === "index" ? "list" : "listproject"}/0/json`)
      .then(res => {
        this.setState({
          list: res.data.data.datas
        })
      })
  }
  componentDidUpdate(prevProps, prevState) {
    const { pageNum, list } = this.state
    // 因为刚进入网站时路径是 '/' 没有动态路有参数，所以类型默认是  index
    const type = this.props.match.params.type || "index"
    if (prevState.pageNum !== pageNum) {
      axios
        .get(
          `/api/article/${
            type === "index" ? "list" : "listproject"
          }/${pageNum}/json`
        )
        .then(res => {
          setTimeout(() => {
            this.setState({
              list: [...list, ...res.data.data.datas]
            })
          }, 1000)
        })
    }
  }
  onVisited = () => {
    // 出现了加载的 loading，就要修改 pageNum
    console.log("1")
    this.setState({
      pageNum: this.state.pageNum + 1
    })
  }
  render() {
    const { list, pageNum } = this.state
    console.log(pageNum)
    const contentList = list.length ? (
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    ) : (
      "请稍等"
    )
    return (
      <div>
        {contentList}
        <InfiniteLoader
          visitStyle={{ marginBottom: "0", backgroundColor: "#000" }}
          loaderStyle={{ width: "50px", height: "50px" }}
          onVisited={this.onVisited}
        />
      </div>
    )
  }
}
export default ContentList
