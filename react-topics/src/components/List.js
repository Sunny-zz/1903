import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
class List extends Component {
  state = {
    topics: []
  }
  componentDidMount() {
    // console.log(this.props)
    const { search } = this.props.location
    // this.setState({
    //   type: search ? search.replace("?tab=", "") : "all"
    // })
    const type = search ? search.replace("?tab=", "") : "all"
    axios.get(`http://localhost:3008/topics/?tab=${type}`).then(res => {
      this.setState({
        topics: res.data
      })
    })
  }
  componentDidUpdate(prevProps) {
    const { search } = this.props.location
    // console.log(prevProps)
    if (prevProps.location.search !== search) {
      // ?tab=good   ====>  good
      //
      this.setState({
        topics: []
      })
      const type = search.replace("?tab=", "")
      axios.get(`http://localhost:3008/topics/?tab=${type}`).then(res => {
        setTimeout(() => {
          this.setState({
            topics: res.data
          })
        }, 500)
      })
    }
  }
  render() {
    const { search } = this.props.location
    const { topics } = this.state
    const list = topics.length ? (
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <NavLink to={`/topic/${topic.id}`}>{topic.title}</NavLink>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等</div>
    )

    return (
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "200px",
            justifyContent: "space-between"
          }}
        >
          <li>
            <NavLink
              style={{
                color: search === "" || search === "?tab=all" ? "red" : ""
              }}
              to='/?tab=all'
            >
              全部
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: search === "?tab=good" ? "red" : "" }}
              to='/?tab=good'
            >
              精华
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: search === "?tab=ask" ? "red" : "" }}
              to='/?tab=ask'
            >
              问答
            </NavLink>
          </li>
        </ul>
        <div>{list}</div>
      </div>
    )
  }
}
export default List
