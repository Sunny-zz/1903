// pages/about/about.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 10,
    show: false,
    val: "",
    comments: [
      {
        id: "1",
        text: "21312"
      },
      {
        id: "2",
        text: "sda"
      },
      {
        id: "3",
        text: "21sdas 312"
      },
      {
        id: "4",
        text: "21asd2e12312"
      },
      {
        id: "5",
        text: "2adas1312"
      }
    ],
    arr: [1, 2, 3, 4, 5]
  },
  // 小程序中的事件 直接写在  js文件内 Page 内的对象下的方法即可
  add() {
    // 修改 data 内的 count
    console.log(1111)
    this.setData({
      count: this.data.count + 1
    })
  },
  change() {
    this.setData({
      show: !this.data.show
    })
  },
  bindInput(e) {
    this.setData({
      val: e.detail.value
    })
  },
  addComment() {
    const { comments, val } = this.data
    this.setData({
      comments: [...comments, { id: new Date().getTime(), text: val }],
      val: ""
    })
  },
  delComment(e) {
    console.log(e)
    const { comments } = this.data
    this.setData({
      comments: comments.filter(item => item.id !== e.currentTarget.dataset.id)
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
  onReachBottom: function() {
    const arr = this.data.arr
    setTimeout(() => {
      this.setData({
        arr: [
          ...arr,
          arr.length + 1,
          arr.length + 2,
          arr.length + 3,
          arr.length + 4,
          arr.length + 5
        ]
      })
    }, 1500)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
