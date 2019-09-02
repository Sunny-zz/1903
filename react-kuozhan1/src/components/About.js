import React, { Component } from "react"
import LazyLoad from "react-lazy-load"
class About extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "60vh",
          backgroundColor: "green"
        }}
      >
        <LazyLoad height={183}>
          <img
            style={{ width: "100%" }}
            src='https://dev.tencent.com/u/sunny-zz/p/gfashion/git/raw/master/images/3303349658_cfaebb811f_o.jpg'
            alt=''
          />
        </LazyLoad>
        <h2>about</h2>
      </div>
    )
  }
}
export default About
