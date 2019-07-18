<template>
  <div>
    <span>评论</span>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">
        {{comment.text}}
        <button @click="$store.dispatch('delComment',{id: comment.id})">删除</button>
      </li>
    </ul>
    <input type="text" v-model="val" />
    <button @click="addComment">添加评论</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postcomment",
  data() {
    return {
      val: ""
    };
  },
  created() {
    // 发请求更新 store 内的 comments 数据
    const { id } = this.$route.params;
    this.$store.dispatch("getComments", { id });
  },
  computed: {
    comments() {
      // 获取 getters 数据
      console.log(this.$store);
      return this.$store.getters.currentComments;
    }
  },
  methods: {
    addComment() {
      // 获取输入框的内容 发送请求更新后台数据 再更新本地的 store 数据
      const { id } = this.$route.params;
      this.$store.dispatch("addComment", {
        val: this.val,
        id,
        clearInput: this.clearInput
      });
    },
    clearInput() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
