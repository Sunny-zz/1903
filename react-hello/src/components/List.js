import React, { Component } from "react"
class List extends Component {
  state = {
    arr: [
      {
        id: "122312",
        name: "小花er"
      },
      {
        id: "1223123",
        name: "小花er1"
      },
      {
        id: "1223125",
        name: "小花er2"
      }
    ]
  }
  render() {
    const { arr } = this.state
    const content = arr.length ? (
      <ul>
        {arr.map(ele => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
    ) : (
      <div>等一下</div>
    )
    return <div>{content}</div>
  }
}
export default List
