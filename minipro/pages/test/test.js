// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr: [1, 2, 3, 4, 5]
  },
  push() {
    wx.startPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
  onPullDownRefresh: function() {
    const arr = this.data.arr
    const num = arr.length
    const newArr = []
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * arr.length)
      newArr.push(arr[random])
      arr.splice(random, 1)
    }
    setTimeout(() => {
      this.setData({
        arr: newArr
      })
      wx.stopPullDownRefresh()
    }, 500)
    // wx.showNavigationBarLoading({
    //   success() {
    //     setTimeout(() => {
    //       wx.hideNavigationBarLoading()
    //       wx.stopPullDownRefresh()
    //     }, 300)
    //   }
    // })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
