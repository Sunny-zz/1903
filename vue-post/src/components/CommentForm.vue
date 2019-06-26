<template>
  <div>
    <textarea style="resize:none;" cols="30" rows="10" v-model="commentText"></textarea>
    <button>添加</button>
  </div>
</template>

<script>
export default {
  name: "comment-form",
  data() {
    return {
      commentText: ""
    };
  }
};
</script>

<style>
</style>
