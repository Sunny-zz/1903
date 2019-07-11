<template>
  <div v-if="topic" class="topic">
    <article>
      <div class="article-head">
        <h2>{{topic.title}}</h2>
        <p></p>
      </div>
      <div class="content" v-html="topic.content"></div>
    </article>
    <div class="comment">
      <p>{{topic.replies.length}}回复</p>
      <ul>
        <li v-for=" comment in topic.replies" :key="comment.id">
          <span v-html="comment.content"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "topic",
  data() {
    return {
      topic: null
    };
  },
  created() {
    // 获取路由的动态参数     $route
    const { id } = this.$route.params;
    axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
      console.log(res.data.data);
      this.topic = res.data.data;
    });
  }
};
</script>

<style>
.topic {
  width: 90%;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
}
.topic .article-head {
  padding: 10px;
}
.topic .article-head h2 {
  margin: 8px 0;
}
.topic .content {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.topic .content .markdown-text > :first-child,
.preview > :first-child {
  margin-top: 0;
}
.preview h1,
.preview h2,
.preview h3,
.preview h4,
.preview h5,
.preview h6,
.reply_area h1,
.reply_area h2,
.reply_area h3,
.reply_area h4,
.reply_area h5,
.reply_area h6,
.topic_content h1,
.topic_content h2,
.topic_content h3,
.topic_content h4,
.topic_content h5,
.topic_content h6 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}
.preview p,
.reply_content p,
.reply_form p,
.topic_content p {
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
}
.markdown-text p,
.preview p {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  line-height: 2em;
  margin: 1em 0;
}
.content img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
</style>
