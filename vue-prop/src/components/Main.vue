<template>
  <div class="main">
    <Button type="more" text="显示更多"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "container",
  components: {
    Button
  }
};
</script>

<style>
.main {
  width: 100%;
  height: 400px;
  background-color: yellowgreen;
}
</style>
