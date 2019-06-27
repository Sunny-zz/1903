<template>
  <div>
    <h1>vue 的应用案例文章的评论(兄弟组件之间的交互)</h1>
    <CommentForm @addComment="addComment"/>
    <Comment @delComment="deleteComment" :comments="comments"/>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
export default {
  name: "app",
  components: {
    CommentForm,
    Comment
  },
  data() {
    return {
      comments: [
        {
          id: "12sw",
          text: "666"
        },
        {
          id: "12sw21",
          text: "哇塞"
        },
        {
          id: "12312sw",
          text: "666哇塞"
        }
      ]
    };
  },
  methods: {
    addComment(commentText) {
      // 获取输入框的内容
      const newComment = {
        id: new Date().getTime(),
        text: commentText
      };
      this.comments.push(newComment);
    },
    deleteComment(id) {
      // 删除事件  知道你点击的是哪一个删除按钮  通过 id 找到对应的内容
      console.log(id);
      // 已知数组内某个对象的 id 值，将此对象从数组中删除    filter
      this.comments = this.comments.filter(item => item.id != id);
    }
  }
};
</script>

<style>
</style>
