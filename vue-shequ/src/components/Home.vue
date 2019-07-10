<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link to="/?tab=all">全部</router-link>
      </li>
      <li>
        <router-link to="/?tab=good">精华</router-link>
      </li>
      <li>
        <router-link to="/?tab=weex">weex</router-link>
      </li>
      <li>
        <router-link to="/?tab=share">分享</router-link>
      </li>
      <li>
        <router-link to="/?tab=ask">问答</router-link>
      </li>
      <li>
        <router-link to="/?tab=job">招聘</router-link>
      </li>
    </ul>
    <div>
      <ul>
        <li v-for="topic in topics" :key="topic.id">{{topic.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: []
    };
  },
  created() {
    axios
      .get("https://www.vue-js.com/api/v1/topics?page=1&limit=30")
      .then(res => {
        this.topics = res.data.data;
      });
  }
};
</script>

<style>
.home {
  width: 80%;
  margin: 0 auto;
}
.home .nav {
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #f6f6f6;
}
.home .nav li {
  margin-right: 25px;
}
.home .nav li a {
  color: #369219;
}
</style>
