<template>
  <div>
    <h3>recommended</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommended",
  data() {
    return {
      posts: [
        {
          id: "123",
          title: "[快讯] Linux 基金会最新发展 + Linus 采访"
        },
        {
          id: "456",
          title: "哪些技术会决定前端开发者的未来发展？"
        },
        {
          id: "789",
          title: "一名合格的程序员应该是什么样子"
        }
      ]
    };
  }
};

// const a = 'world'
// const b = 'dream'
// console.log('hello ' + a + ",hello " + b);
// console.log(`hello ${a},hello ${b}`);
</script>

<style>
</style>
