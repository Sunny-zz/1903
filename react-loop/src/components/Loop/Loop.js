import React, { Component } from "react"
import "./loop.css"
class Loop extends Component {
  state = {
    pics: [
      {
        id: "1",
        imgSrc:
          "https://img10.360buyimg.com/babel/s1180x940_jfs/t1/78874/33/5530/95789/5d3aec4eEf2b1186a/2113dbbeb14ee415.jpg.webp"
      },
      {
        id: "2",
        imgSrc:
          "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/81490/10/5947/71066/5d400cfcEc193f950/f538bbc1e8e526dd.jpg.webp"
      },
      {
        id: "3",
        imgSrc:
          "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/39591/32/12418/99559/5d3af6f4E3857ea51/595ece114ea5cbd7.jpg.webp"
      },
      {
        id: "4",
        imgSrc:
          "https://imgcps.jd.com/ling/4458207/5aSP5pel55WF6aWu/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa5d/4878e798.jpg"
      }
    ],
    activeIndex: 0
  }
  changeActiveIndex = index => {
    this.setState({
      activeIndex: index
    })
  }
  next = () => {
    const { activeIndex, pics } = this.state
    this.setState({
      activeIndex: activeIndex === pics.length - 1 ? 0 : activeIndex + 1
    })
  }
  prev = () => {
    const { activeIndex, pics } = this.state
    this.setState({
      activeIndex: activeIndex === 0 ? pics.length - 1 : activeIndex - 1
    })
  }
  render() {
    const { pics, activeIndex } = this.state
    const imgList = pics.map(ele => (
      <img className='img' key={ele.id} src={ele.imgSrc} alt='' />
    ))
    const btnList = pics.map((ele, index) => (
      <li
        onMouseEnter={() => this.changeActiveIndex(index)}
        className={activeIndex === index ? "active" : ""}
        key={ele.id}
      />
    ))
    return (
      <div className='loop-wrap'>
        <div className='pic' style={{ marginLeft: `${activeIndex * -590}px` }}>
          {imgList}
        </div>
        <div onClick={this.next} className='next'>
          {">"}
        </div>
        <div onClick={this.prev} className='prev'>
          {"<"}
        </div>
        <ul className='list'>{btnList}</ul>
      </div>
    )
  }
}
export default Loop
