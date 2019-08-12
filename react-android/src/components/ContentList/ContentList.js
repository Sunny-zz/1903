import React, { Component } from "react"
import axios from "axios"
class ContentList extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    const { type } = this.props.match.params
    axios
      .get(`/api/article/${type === "index" ? "list" : "listproject"}/0/json`)
      .then(res => {
        this.setState({
          list: res.data.data.datas
        })
      })
  }
  render() {
    const { list } = this.state
    const contentList = list.length ? (
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    ) : (
      "请稍等"
    )
    return <div>{contentList}</div>
  }
}
export default ContentList
