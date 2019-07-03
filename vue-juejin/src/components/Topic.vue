<template>
  <div>文章展示</div>
</template>

<script>
// 如果在这个组件出现的时候获取页面地址上的 id 值
// 根据这个 id 去后台获取对应的文章信息展示到组件上
import axios from "axios";
export default {
  name: "topic",
  data() {
    return {
      topic: {}
    };
  },
  created() {
    // 获取动态参数
    const { id } = this.$route.params;
    axios.get(`http://localhost:3008/topics/${id}`).then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style>
</style>
