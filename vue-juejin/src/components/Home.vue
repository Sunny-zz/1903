<template>
  <div>
    <h2>首页</h2>
    <ul>
      <li>
        <!-- @click.native  给组件的原生标签绑定事件 -->
        <router-link @click.native="xxx" to="/?sort=popular">热门</router-link>
      </li>
      <li>
        <router-link to="/?sort=newest">最新</router-link>
      </li>
      <li>
        <router-link to="/?sort=three_days_hottest">热榜</router-link>
      </li>
    </ul>
    <Topics :topics="topics" />
  </div>
</template>

<script>
import Topics from "./Topics.vue";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: []
    };
  },
  created() {
    console.log("初始化 data");
    // 使用 axios 发请求 更新 数据
    // 默认获取 热门的数据
    axios.get(`http://localhost:3008/topics?popular=true`).then(res => {
      // console.log(res.data);
      setTimeout(() => {
        this.topics = res.data;
      }, 1000);
    });
  },
  components: {
    Topics
  },
  methods: {
    xxx() {
      console.log("11111");
      // 重新获取后台数据
    }
  }
};
</script>

<style>
</style>
