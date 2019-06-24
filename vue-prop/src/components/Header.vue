<template>
  <div class="header">
    <!-- 如何向子组件传递非 str 数据 -->
    <Button type="login1" text="登录"/>
    <Button type="signup" text="注册"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "tou",
  components: {
    Button
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
