<template>
  <div>
    <h1>vue 的应用案例文章的评论(兄弟组件之间的交互)</h1>
    <!-- <CommentForm/> -->
    <Comment/>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
export default {
  name: "app",
  components: {
    CommentForm,
    Comment
  }
};
</script>

<style>
</style>
