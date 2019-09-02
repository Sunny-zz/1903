//app.js
App({
  onLaunch: function() {
    // 获取用户信息
    // 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
    wx.getSetting({
      success: res => {
        // res.authSetting  用户授权结果 是一个对象对象下有很多属性  scope.userInfo 。。。。。。

        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 小程序内的公共 data
  // 并不是 redux  vuex
  // 在其他页面如何使用 公共的 data
  globalData: {
    userInfo: null
  }
})
