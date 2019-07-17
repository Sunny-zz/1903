<template>
  <div>
    <h1>vuex 小例子</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  created() {
    // 发请求拿数据更新 store 中 posts
    this.$store.dispatch('getPosts')
  }
};
</script>

<style>
</style>
