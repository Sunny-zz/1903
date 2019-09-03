// pages/home/home.js
import bmap from "../../libs/bmap-wx.min"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    location: "",
    weatherData: "",
    region: ["河北省", "秦皇岛市", "海港区"]
  },
  bindRegionChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value)
    this.setData({
      region: e.detail.value
    })
    // http://api.map.baidu.com/geocoding/v3/?address=北京市海淀区上地十街10号&output=json&ak=您的ak&callback=showLocation
    wx.request({
      url: `https://api.map.baidu.com/geocoding/v3/?address=${e.detail.value.join(
        ""
      )}&ak=pFhG396mvlXqus9ltZWFDzke4B9gpH2h`,
      method: "GET",
      success: res => {
        console.log(res)
        // 根据选择的城市获取对应的天气信息更新自己的 weatherData
        this.BMap.weather({
          fail: this.fail,
          success: this.success,
          location: `${res.location.lng},${res.location.lat}`
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取自己的位置
    wx.getLocation({
      type: "wgs84",
      success: res => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(res)
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=3MYBZ-JMW6W-IQDRY-ODC44-QLAKK-QQFR3`,
          method: "GET",
          success: result => {
            console.log(result)
            this.setData({
              location: result.data.result.address
            })
          }
        })
      }
    })
    const that = this
    // 新建百度地图对象
    that.BMap = new bmap.BMapWX({
      ak: "pFhG396mvlXqus9ltZWFDzke4B9gpH2h"
    })
    that.fail = function(data) {
      console.log(data)
    }
    that.success = function(data) {
      var weatherData = data.currentWeather[0]
      weatherData =
        "城市：" +
        weatherData.currentCity +
        "\n" +
        "PM2.5：" +
        weatherData.pm25 +
        "\n" +
        "日期：" +
        weatherData.date +
        "\n" +
        "温度：" +
        weatherData.temperature +
        "\n" +
        "天气：" +
        weatherData.weatherDesc +
        "\n" +
        "风力：" +
        weatherData.wind +
        "\n"
      that.setData({
        weatherData: weatherData
      })
    }
    // 发起weather请求
    that.BMap.weather({
      fail: that.fail,
      success: that.success
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
