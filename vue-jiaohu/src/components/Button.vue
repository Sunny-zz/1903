<template>
  <button @click="$emit('handleClick')" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: "btn",
  props: {
    text: {
      type: String,
      default: "默认按钮"
    }
  }
};
</script>

<style>
.btn {
  padding: 10px 20px;
  outline: 0;
  border: 0;
  background-color: rgb(233, 84, 84);
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
}
</style>
