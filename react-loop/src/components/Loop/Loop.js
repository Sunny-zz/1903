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
    // 0 1 2 3 4 5
    // index 0 1 2 3
    activeIndex: 1,
    isHasTransition: true
  }
  changeActiveIndex = index => {
    this.setState({
      activeIndex: index + 1,
      isHasTransition: true
    })
  }
  next = () => {
    const { activeIndex } = this.state
    // 0 1 2 3 4 5
    // 5 在点击按钮的时候 变成 2
    this.setState({
      activeIndex: activeIndex + 1,
      isHasTransition: true
    })
    // setState 函数是异步操作
    // console.log(this.state.activeIndex)
    // console.log(document.querySelector(".pic").style.marginLeft)
    // 依据更新之后的 state 要停止动画并且把修改成另外一个值
  }
  // 组件更新 state 完毕默认会触发生命周期 componentDidUpdate
  componentDidUpdate = () => {
    const { pics, activeIndex } = this.state
    setTimeout(() => {
      if (activeIndex === pics.length + 1) {
        // 先去掉 transition     5 代表视觉上的第一张要换成前面的第一张不能加动画
        // 把 activeIndex 换成 1
        this.setState({
          activeIndex: 1,
          isHasTransition: false
        })
      } else if (activeIndex === 0) {
        this.setState({
          activeIndex: pics.length,
          isHasTransition: false
        })
      }
    }, 750)
  }
  prev = () => {
    const { activeIndex } = this.state
    this.setState({
      activeIndex: activeIndex - 1,
      isHasTransition: true
    })
  }
  render() {
    // 在这个函数内可以获取到更新之后的state用于更新页面
    // 但是在这个函数内不能更新 state ，如果更新了的话会进入死循环

    const { pics, activeIndex, isHasTransition } = this.state
    const imgList = pics.map(ele => (
      <img className='img' key={ele.id} src={ele.imgSrc} alt='' />
    ))
    const btnList = pics.map((ele, index) => (
      <li
        onMouseEnter={() => this.changeActiveIndex(index)}
        className={
          activeIndex - 1 === index ||
          (index === 0 && activeIndex === 5) ||
          (index === 3 && activeIndex === 0)
            ? "active"
            : ""
        }
        key={ele.id}
      />
    ))
    return (
      <div className='loop-wrap'>
        <div
          className='pic'
          style={{
            marginLeft: `${activeIndex * -590}px`,
            transition: isHasTransition ? "margin-left 0.75s" : ""
          }}
        >
          <img className='img' src={pics[pics.length - 1].imgSrc} alt='' />
          {imgList}
          <img className='img' src={pics[0].imgSrc} alt='' />
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
