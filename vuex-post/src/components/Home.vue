<template>
  <div>
    <h2>文章列表</h2>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style>
</style>
