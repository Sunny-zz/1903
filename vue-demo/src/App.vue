<template>
  <div>
    <!-- box   active  bg -->
    <!-- <h1 :class=" bool ? 'active box' : 'bg box' ">message:{{ false ? "hello world" : "空" }}</h1>
    <h2 :class="{active: true,bg: true,box: true}">123</h2>
    <h3 :class="[true ? 'active' : 'bg' ,'box']">123</h3>
    <h4 :style="{color: 'red'}"></h4>-->
    <Demo/>
  </div>
</template>

<script>
// 模版语法
import Demo from "./components/Demo";
export default {
  name: "app",
  // data: vue 组件的数据或者叫 state(状态)
  // vue 提倡只要是页面发生变化必须通过控制 data 的改变实现
  // 页面要改变必须改变状态(data)
  data() {
    return {
      // 创建了一个变量 bool     const bool = false
      bool: false,
      bool1: "red",
      styles: {
        color: "red"
      }
    };
  },
  components: {
    Demo
  }
};
</script>

<style>
/* .active {
  color: red;
}
.bg {
  color: blue;
  font-size: 100px;
} */
</style>


