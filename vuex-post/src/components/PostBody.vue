<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <span>评论数:{{commentNum}}</span>
    <p>{{post.content}}</p>
  </div>
</template>

<script>
export default {
  name: "postbody",
  computed: {
    post() {
      const { id } = this.$route.params;
      console.log(this.$store.state.posts);
      return this.$store.state.posts.find(post => post.id === id);
    },
    commentNum() {
      return this.$store.state.comments.length;
    }
  }
};
</script>

<style>
</style>
