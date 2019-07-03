<template>
  <div>
    <img
      v-if="!topics.length"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562065521865&di=b03642c5b6bcee3ec1ec4a8cdd6af9b2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
      alt
    />
    <ul v-else>
      <router-link v-for="topic in topics" :key="topic.id" tag="li" :to="`/topic/${topic.id}`">
        <h3>{{topic.title}}</h3>
      </router-link>
    </ul>
  </div>
</template>

<script>
// Vue 组件的生命周期钩子(函数)
// 当组件出现的时候 就需要向后台发送请求获取数据
// 1. beforeCreate
// 2. created   初始化 data 和 (event.watch)的,在这个生命周期内可以修改 data    一般用于刚进页面的时候向后台获取数据更新组件的data
// 3. beforeMount  组件渲染成真实的 dom 之前
// 4. mounted  渲染真实 dom 完毕   此时组件在页面就出现了  在这个生命周期内可以获取真实的 dom
// 5. beforeUpdate  组件更新 data 前
// 6. updated 组件更新 data 完毕
// 7. destroyed 组件被销毁
import axios from "axios";
export default {
  name: "topics",
  data() {
    return {
      topics: []
    };
  },
  beforeCreate() {
    console.log("组件创建虚拟 dom");
  },
  created() {
    console.log("初始化 data");
    // 使用 axios 发请求 更新 数据
    axios.get("http://localhost:3008/topics").then(res => {
      // console.log(res.data);
      setTimeout(() => {
        this.topics = res.data;
      }, 1000);
    });
  },
  beforeMount() {
    console.log("再页面中渲染之前");
  },
  mounted() {
    console.log("组件渲染完毕");
  },
  beforeUpdate() {
    console.log("组件即将要更新 data");
  },
  updated() {
    console.log("组件更新 data 完毕");
  }
};
</script>

<style>
</style>
