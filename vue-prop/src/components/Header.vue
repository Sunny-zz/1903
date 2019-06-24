<template>
  <div class="header">
    <Button type="login" text="登录"/>
    <Button type='signup' text="注册"/>
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
