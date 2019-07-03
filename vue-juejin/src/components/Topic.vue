<template>
  <img
    v-if="!topic"
    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562065521865&di=b03642c5b6bcee3ec1ec4a8cdd6af9b2&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
    alt
  />
  <article v-else>
    <h2>{{topic.title}}</h2>
    <!-- 想要将 html 字符串渲染到页面中  此操作是危险的  需要使用  v-html 指令 -->
    <div v-html="topic.content"></div>
  </article>
</template>

<script>
// 如果在这个组件出现的时候获取页面地址上的 id 值
// 根据这个 id 去后台获取对应的文章信息展示到组件上
import axios from "axios";
export default {
  name: "topic",
  data() {
    return {
      topic: null
    };
  },
  created() {
    // 获取动态参数
    const { id } = this.$route.params;
    // 通过路由传参的方式将文章数据传递过来并展示
    // 使用  to 传递 query 用来做查询
    axios.get(`http://localhost:3008/topics/${id}`).then(res => {
      setTimeout(() => {}, 500);
    });
  }
};
</script>

<style>
</style>
