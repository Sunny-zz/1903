import React, { Component } from "react"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import "./my-swiper.css"
class MySwiper extends Component {
  componentDidMount() {
    const { loop, slidesPerView, direction, className } = this.props
    // 初始化 swiper
    new Swiper(`.${className}`, {
      direction: direction,
      loop: loop, // 循环模式选项
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      slidesPerView: slidesPerView
    })
  }
  render() {
    const { pics, width, height, className } = this.props
    return (
      <div className='my-swiper'>
        <div
          style={{ width, height }}
          className={`swiper-container ${className}`}
        >
          <div className='swiper-wrapper'>
            {pics.map((item, index) => (
              <div key={item + index} className='swiper-slide'>
                <img src={item} alt='' />
              </div>
            ))}
          </div>
          <div className='swiper-button-prev' />
          <div className='swiper-button-next' />
        </div>
      </div>
    )
  }
}
export default MySwiper
