// pages/upload/upload.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ""
  },
  doUpload: function() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: res => {
        wx.showLoading({
          title: "上传中"
        })
        // 上传图片上传多张图 怎么把所有的图全部传到 云存储内
        // 获取图片的地址
        // const filePath = res.tempFilePaths[0]
        // console.log(res)
        // http://tmp/wx21414537e620c175.o6zAJs0W8xRenkTwKmok06T_-3_I.lJx1TQcWsZ1yde812561afc25555dfdeee299f8f8798.png
        // 上传图片
        // filePath.match(/\.[^.]+?$/)[0]  获取的就是你的  filePath 最后面.xx  也就是后缀
        const tasks = res.tempFilePaths.map((item, index) =>
          wx.cloud.uploadFile({
            cloudPath: "my-image" + index + item.match(/\.[^.]+?$/)[0],
            filePath: item
          })
        )
        Promise.all(tasks)
          .then(res => {
            wx.hideLoading()
            // 图片上传成功
            // 需要将图片的文件 id 存储到 数据库内
            const db = wx.cloud.database()
            const fileID = res[0].fileID
            db.collection("myImg").add({
              data: {
                imgId: res[0].fileID
              },
              success: res => {
                // 在这向数据库存储成功，然后需要使用 fileId 获取临时的图片链接
                wx.cloud.getTempFileURL({
                  fileList: [fileID],
                  success: res => {
                    // fileList 是一个有如下结构的对象数组
                    // [{
                    //    fileID: 'cloud://xxx.png', // 文件 ID
                    //    tempFileURL: '', // 临时文件网络链接
                    //    maxAge: 120 * 60 * 1000, // 有效期
                    // }]
                    console.log(res.fileList)
                    this.setData({
                      imgUrl: res.fileList[0].tempFileURL
                    })
                  },
                  fail: console.error
                })
              }
            })
          })
          .catch(err => {
            wx.hideLoading()
          })
        // console.log(x)

        // const cloudPath =
        //   "ui/" + "my-image" + Math.random() + filePath.match(/\.[^.]+?$/)[0]
        // // 向云端上传
        // wx.cloud.uploadFile({
        //   cloudPath,
        //   filePath,
        //   success: res => {
        //     console.log("[上传文件] 成功：", res)
        //     // app.globalData.fileID = res.fileID
        //     // app.globalData.cloudPath = cloudPath
        //     // app.globalData.imagePath = filePath
        //     // wx.navigateTo({
        //     //   url: "../storageConsole/storageConsole"
        //     // })
        //   },
        //   fail: e => {
        //     console.error("[上传文件] 失败：", e)
        //     wx.showToast({
        //       icon: "none",
        //       title: "上传失败"
        //     })
        //   },
        //   complete: () => {
        //     wx.hideLoading()
        //   }
        // })

        // ui app 提案的小程序
        // 案例展示页
        //
        // 1. 上传图片 (多个或一个)
        // 2. 案例展示
      },
      fail: e => {
        console.error(e)
      }
    })
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
