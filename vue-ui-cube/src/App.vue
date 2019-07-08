<template>
  <div>
    <cube-button :style="{width: '200px'}" inline>Button</cube-button>
    <cube-button @click="showPicker">Picker</cube-button>
    <div class="scroll-list-wrap">
      <!-- 组件的 ref 提供一个方案让父组件获取子组件      在父组件内 使用   this.$refs.scroll  获取    可以获取组件内的一些方法(methods) 或组件的状态(data) -->
      <cube-scroll
        ref="scroll"
        :data="items"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        :options="{pullDownRefresh: {
          txt:'加载成功'
        },pullUpLoad:true}"
      >
        <div class="list-item" v-for="(item,index) in items" :key="index">{{item}}</div>
        <!-- 自定义加载动画 -->
        <!-- <template slot="pulldown" slot-scope="props">
          <div v-if="props.pullDownRefresh" class="cube-pulldown-wrapper">
            <span class="pulldown-content">使劲儿加载中....</span>
          </div>
        </template>-->
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      column: [
        { title: "剧毒", id: "剧毒", xxx: 1 },
        { title: "蚂蚁", id: "蚂蚁", xxx: 2 },
        { title: "幽鬼", id: "幽鬼", xxx: 3 }
      ],
      items: [
        "😀 😁 😂 🤣 😃 😄 ",
        "🙂 🤗 🤩 🤔 🤨 😐 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "😔 😕 🙃 🤑 😲 ☹️ ",
        "🐣 🐣 🐣 🐣 🐣 🐣 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🐥 🐥 🐥 🐥 🐥 🐥 ",
        "🤓 🤓 🤓 🤓 🤓 🤓 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🦔 🦔 🦔 🦔 🦔 🦔 ",
        "🙈 🙈 🙈 🙈 🙈 🙈 ",
        "👆🏻 scroll up/down 👇🏻 ",
        "🚖 🚖 🚖 🚖 🚖 🚖 ",
        "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 "
      ]
    };
  },
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "Picker",
          data: [this.column],
          alias: {
            value: "id",
            text: "title"
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }
      this.picker.show();
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: "warn",
        content: `Selected Item: <br/> - value: ${selectedVal.join(
          ", "
        )} <br/> - index: ${selectedIndex.join(
          ", "
        )} <br/> - text: ${selectedText.join(" ")}`,
        icon: "cubeic-alert"
      }).show();
      console.log(selectedVal[0]);
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000
      }).show();
    },
    onPullingDown() {
      // 更新数据 数据更新完毕 关闭下拉效果
      // 随机将数组打乱顺序
      // const num = Math.floor(Math.random() * this.items.length);
      // console.log(num);
      // 数组倒序
      // 更新数据
      setTimeout(() => {
        this.items = [...this.items].reverse();
        // 当你修改 cube-scroll data 完毕时下拉效果自动关闭
      }, 1000);
      // 不更新数据
      // setTimeout(() => {
      //   this.$refs.scroll.forceUpdate();
      // }, 1000);
    },
    onPullingUp() {
      setTimeout(() => {
        this.items.push(
          "🤓 🤓 🤓 🤓 🤓 🤓 ",
          "👆🏻 scroll up/down 👇🏻 ",
          "🦔 🦔 🦔 🦔 🦔 🦔 ",
          "🙈 🙈 🙈 🙈 🙈 🙈 ",
          "👆🏻 scroll up/down 👇🏻 ",
          "🚖 🚖 🚖 🚖 🚖 🚖 ",
          "✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 🥇"
        );
      }, 5000);
    }
  }
};
</script>

<style>
.scroll-list-wrap {
  height: 350px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.list-item {
  padding: 20px 0;
  /* border-bottom: 1px solid #000; */
}
</style>
