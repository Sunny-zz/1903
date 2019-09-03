// pages/index/index.js
// 使用公共的 data  app.js 内的 globalData
// 获取整个小程序的实例 app.js 内的相关设置
const app = getApp()
import { fun } from "../../utils/util"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    posts: []
  },
  getUserInfo(e) {
    // 将全局的 userInfo 设置好，便于其他页面使用
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      // 给 app 实例添加了一个方法
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    }
    wx.request({
      url: "https://cnodejs.org/api/v1/topics", //仅为示例，并非真实的接口地址
      header: {
        "content-type": "application/json" // 默认值
      },
      method: "GET",
      success: res => {
        this.setData({
          posts: res.data.data
        })
      }
    })
  },
  handleBtn() {
    console.log(fun(100, 200))
    console.log("点击了自定义组件 button")
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
