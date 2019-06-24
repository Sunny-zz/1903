<template>
  <div>
    <h1>vue 的 prop</h1>
    <!-- header 内的 button 里面的文字要显示成 登录  -->
    <!-- mian 内的 button 里面的文字要显示成 显示更多  -->
    <!-- app 内的 button 里面的文字要显示成 默认  -->
    <Header/>
    <Main/>
    <Button/>
  </div>
</template>

<script>
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  name: "app",
  components: {
    Button,
    Header,
    Main
  }
};
</script>

<style>
</style>
