<template>
  <div>
    <h1>vue 的 prop</h1>
    <!-- header 内的 button 里面的文字要显示成 登录  -->
    <!-- mian 内的 button 里面的文字要显示成 显示更多  -->
    <!-- app 内的 button 里面的文字要显示成 默认  -->
    <Header/>
    <Main/>
    <Button/>
    <Card :imgUrl="pic" title="哈哈哈"/>
    <!-- <img :src="pic" alt> -->
  </div>
</template>

<script>
import pic from "./assets/1.png";
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
export default {
  name: "app",
  data() {
    return {
      pic: pic
    };
  },
  components: {
    Button,
    Header,
    Main,
    Card
  }
};
</script>

<style>
</style>
