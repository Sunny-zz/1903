<template>
  <div class="header">
    <!-- 如何向子组件传递非 str 数据 -->
    <Button type="login" text="登录" :clickFun="login"/>
    <Button type="signup" text="注册"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "tou",
  components: {
    Button
  },
  methods: {
    login() {
      console.log("header组件登录要做的事");
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 50px;
  background-color: #00b3d4;
}
</style>
