<template>
  <div class="header">
    <!-- 如何向子组件传递非 str 数据 -->
    <!-- vue 父组件向子组件传递函数 1.普通的属性方式传递，子组件使用 props 接收-->
    <!-- 2. 父组件向子组件传递自定义事件，子组件使用 $emit("自定义事件名") 接收，在template 直接使用$emit("自定义事件名") 在 script 内 this.$emit("自定义事件名") -->
    <Button type="login" text="登录" :clickFun="login"/>
    <Button type="signup" text="注册" @clickFun="signUp"/>
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
    },
    signUp() {
      console.log("header组件的注册");
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
