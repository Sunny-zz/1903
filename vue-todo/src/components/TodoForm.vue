<template>
  <div>
    <input v-model="val" type="text">
    <button @click="handleClick">提交</button>
  </div>
</template>

<script>
export default {
  name: "todoform",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    handleClick() {
      if (this.val.trim()) {
        this.$emit("addTodo", this.val);
        this.val = "";
      }
    }
  }
};
</script>

<style>
</style>
