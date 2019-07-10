<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link
          :class=" $route.fullPath === '/' || $route.fullPath==='/?tab=all' ? 'active' : ''"
          to="/?tab=all"
        >全部</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=good' ? 'active' : ''" to="/?tab=good">精华</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=weex' ? 'active' : ''" to="/?tab=weex">weex</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=share' ? 'active' : ''" to="/?tab=share">分享</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=ask' ? 'active' : ''" to="/?tab=ask">问答</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=job' ? 'active' : ''" to="/?tab=job">招聘</router-link>
      </li>
    </ul>
    <div v-if="topics.length" class="content">
      <ul>
        <li v-for="topic in topics" :key="topic.id">{{topic.title}}</li>
      </ul>
    </div>
    <img
      v-else
      src="https://hbimg.huabanimg.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
      alt
    />
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
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}`)
          .then(res => {
            this.topics = res.data.data;
          });
      }
    }
  }
};
</script>

<style>
.home {
  width: 80%;
  margin: 0 auto;
}
.home > img {
  width: 100%;
}
.home .nav {
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #f6f6f6;
  margin: 0;
}
.home .nav li {
  margin-right: 25px;
}
.home .nav li a {
  color: #369219;
  padding: 3px 4px;
  border-radius: 3px;
}
.home .nav li a.active {
  color: #fff;
  background-color: #369219;
}
.home .content {
  background-color: #fff;
}
.home .content ul {
  margin: 0;
  padding: 0;
}
.home .content ul li {
  line-height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
