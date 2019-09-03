// components/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: "默认按钮"
    },
    size: {
      type: String,
      value: "mini"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    // num: 10
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      // 用来接收某个页面传递过来的自定义事件
      // 如何传递事件
      // <my-button bind:xxx="页面自己定义好的事件"></my-button>
      // xxx 代表自定义事件名
      // 组件怎么执行 this.triggerEvent("xxx")
      this.triggerEvent("handlebtn")
      // this.setData({
      //   num: 100
      // })
    }
  }
})
