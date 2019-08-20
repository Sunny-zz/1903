<template>
  <div>
    <h1>webpack 搭建1 vue 开发环境</h1>
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
// 当打包编译的时候如果不写 vue 后缀名就编译失败 说不认识这个模块
// 解决方案修 webpack 改配置文件，配置模块可省略后缀名
export default {
  name: "app",
  components: {
    Home
  },
  created() {
    console.log(10);
  }
};
</script>

<style scoped  >
h1 {
  color: greenyellow;
}
</style>
