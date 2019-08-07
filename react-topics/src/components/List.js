import React, { Component } from "react"
import { NavLink } from "react-router-dom"
class List extends Component {
  state = {
    type: "all"
  }
  componentDidMount() {
    // console.log(this.props)
    const { search } = this.props.location
    this.setState({
      type: search ? search.replace("?tab=", "") : "all"
    })
  }
  componentDidUpdate(prevProps) {
    const { search } = this.props.location
    // console.log(prevProps)
    if (prevProps.location.search !== search) {
      // ?tab=good   ====>  good
      //
      this.setState({
        type: search.replace("?tab=", "")
      })
    }
  }
  render() {
    const { search } = this.props.location
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
        <div>对应{this.state.type}类别的列表</div>
      </div>
    )
  }
}
export default List
