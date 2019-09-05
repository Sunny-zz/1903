// pages/todos/todos.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    todos: [],
    val: "",
    val1: ""
  },
  handleInput(e) {
    this.setData({
      [e.currentTarget.dataset.val]: e.detail.value
    })
  },
  done(e) {
    const db = wx.cloud.database()
    const { todos } = this.data
    const { id } = e.currentTarget.dataset
    db.collection("todos")
      .doc(id)
      .update({
        // data 传入需要局部更新的数据
        data: {
          // 表示将 done 字段置为 true
          done: !todos.find(item => item._id === id).done
        },
        success: res => {
          this.setData({
            todos: todos.map(todo => {
              if (todo._id === id) {
                todo.done = !todo.done
              }
              return todo
            })
          })
        }
      })
  },
  del(e) {
    // 删除云端数据库内的数据
    const db = wx.cloud.database()
    db.collection("todos")
      .doc(e.currentTarget.dataset.id)
      .remove({
        success: res => {
          this.setData({
            todos: this.data.todos.filter(
              todo => todo._id !== e.currentTarget.dataset.id
            )
          })
          wx.showToast({
            title: "删除记录成功"
          })
        }
      })
  },
  onAdd: function() {
    if (this.data.val.trim()) {
      // 获取云端数据库
      const db = wx.cloud.database()
      // 给云端数据库的 todos 集合添加一条数据
      // 类似于发送 post 请求
      db.collection("todos").add({
        // data 向后台传递的数据
        data: {
          todo: this.data.val,
          done: false
        },
        // success 添加云端数据成功之后的回调
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          console.log(this.data.todos)
          this.setData({
            todos: [
              ...this.data.todos,
              { _id: res._id, todo: this.data.val, done: false }
            ],
            val: ""
          })
          wx.showToast({
            title: "新增记录成功"
          })
          console.log("[数据库] [新增记录] 成功，记录 _id: ", res._id)
        },
        fail: err => {
          wx.showToast({
            icon: "none",
            title: "新增记录失败"
          })
          console.error("[数据库] [新增记录] 失败：", err)
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // // 获取数据库 todos 集合内的数据 更新到页面 todos data 内
    // const db = wx.cloud.database()
    // db.collection("todos")
    //   .get()
    //   .then(res => {
    //     // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    //     this.setData({
    //       todos: res.data.map(todo => {
    //         delete todo._openid
    //         return todo
    //       })
    //     })
    //   })
    // 执行云函数 getTodos 获取 todos 数据更新本地数据 data
    wx.cloud.callFunction({
      // 云函数名称
      name: "getTodos",
      success: res => {
        console.log(res)
        this.setData({
          todos: res.result.todos
        })
      },
      fail: console.error
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
