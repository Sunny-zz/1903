<template>
  <div>
    文章列表
    <!-- 带分页器 -->
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
    <el-pagination
      @current-change="changePage"
      background
      layout="prev, pager, next"
      :page-size="2"
      :total="6"
    ></el-pagination>
    <!-- :current-page.sync="page" -->
  </div>
</template>

<script>
//  homework 分页器  实现分页功能   文章的数据 自己定义
// [
//   {
//     id: "12312",
//     title: "asdasd"
//   }
// ];
// localhost:3008/posts?_page=5&_limit=10
import axios from "axios";
export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios.get("http://localhost:3008/posts?_page=1&_limit=2").then(res => {
      this.posts = res.data;
    });
  },
  methods: {
    changePage(x) {
      // 获取当前页数 x   组件的回调参数
      // 修改当前页面的地址
      this.$router.push(`/?_page=${x}`);
      axios.get(`http://localhost:3008/posts?_page=${x}&_limit=2`).then(res => {
        this.posts = res.data;
      });
    }
  }
};
</script>

<style>
</style>
