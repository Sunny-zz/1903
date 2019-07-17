<template>
  <div>
    <button>-</button>
    <span>{{num}}</span>
    <button @click="add">+</button>
    <button @click="change(100,1000)">把 num 修改成 100</button>
    <button @click="change(200,1000)">把 num 修改成 200</button>
    <button @click="change(300,1000)">把 num 修改成 300</button>
    <button @click="change(400,1000)">把 num 修改成 400</button>
  </div>
</template>

<script>
// 组件内获取 store里面的数据   $store.state  获取
// 动态修改 store 中的数据   触发 store 中创建好的 mutation 函数
// 需要使用 store 内的 commit 方法  例如  this.$store.commit('addNum') 触发了 addNum mutation 函数
export default {
  name: "app",
  computed: {
    num() {
      return this.$store.state.num;
    }
  },
  methods: {
    add() {
      this.$store.commit("addNum");
    },
    change(newNum, newNum1) {
      // mutation 函数传参
      this.$store.commit("changeNum", { newNum, newNum1 });
    }
  }
};
</script>

<style>
</style>
