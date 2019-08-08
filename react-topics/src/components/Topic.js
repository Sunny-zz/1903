import React, { Component } from "react"
import axios from "axios"

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />;
// }
class Topic extends Component {
  state = {
    topic: null
  }
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/topics/${id}`).then(res => {
      this.setState({
        topic: res.data
      })
    })
  }
  render() {
    const { topic } = this.state
    const content = topic ? (
      <div>
        <h2>{topic.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>
    ) : (
      <div>请稍等</div>
    )
    return content
  }
}
export default Topic
