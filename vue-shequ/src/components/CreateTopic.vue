<template>
  <div>
    <select v-model="tab">
      <option value>请选择</option>
      <option value="share">分享</option>
      <option value="ask">问答</option>
      <option value="job">招聘</option>
    </select>
    <input type="text" v-model="title" />
    <textarea name id cols="30" rows="10" v-model="content"></textarea>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      tab: "",
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          content: this.content,
          title: this.title,
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          console.log(res.data);
          this.tab = "";
          this.title = "";
          this.content = "";
          this.$router.push(`/topic/${res.data.topic_id}`);
        });
    }
  }
};
</script>

<style>
</style>
