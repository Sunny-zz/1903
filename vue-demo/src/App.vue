<template>
  <div>
    <!-- box   active  bg -->
    <h1 :class=" bool ? 'active box' : 'bg box' ">message:{{ false ? "hello world" : "空" }}</h1>
    <h2 :class="{active: true,bg: true,box: true}">123</h2>
    <h3 :class="[true ? 'active' : 'bg' ,'box']">123</h3>
    <h4 :style="{color: 'red'}"></h4>
  </div>
</template>

<script>
// 模版语法
export default {
  name: "app",
  data() {
    return {
      // 创建了一个变量 bool     const bool = false
      bool: false,
      bool1: "red",
      styles: {
        color: "red"
      }
    };
  }
};
</script>

<style>
.active {
  color: red;
}
.bg {
  color: blue;
  font-size: 100px;
}
</style>


