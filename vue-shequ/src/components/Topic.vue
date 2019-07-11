<template>
  <div v-if="topic" class="topic">
    <article>
      <div class="article-head">
        <div>
          <span class="tab active" v-if="topic.top || topic.good">{{topic.top? '置顶' :'精华' }}</span>
          <h2>{{topic.title}}</h2>
          <span
            v-if="isLogin"
            @click="changeCollect"
            class="collect"
          >{{is_collect ? '取消收藏' : '加入收藏'}}</span>
        </div>
        <p style="font-size: 12px;">
          <span>
            <b>·</b>
            发布于{{myMoment(topic.create_at)}}
          </span>
          <span>
            <b>·</b>
            作者 {{topic.author.loginname}}
          </span>
          <span>
            <b>·</b>
            {{topic.visit_count}} 次浏览
          </span>
          <span>
            <b>·</b>
            来自 {{topic.tab === 'share' ? '分享' : topic.tab ==='ask' ? '问答' : topic.tab ==='job' ? '招聘' : 'weex'}}
          </span>
        </p>
      </div>
      <div class="topic_content" v-html="topic.content"></div>
    </article>
    <div class="comment">
      <p>{{topic.replies.length}}回复</p>
      <ul>
        <li v-for=" comment in topic.replies" :key="comment.id">
          <span v-html="comment.content"></span>
        </li>
      </ul>
      <div class="comment-form">
        <span>添加回复</span>
        <textarea cols="30" rows="10" v-model="text"></textarea>
        <button @click="addComment">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "topic",
  data() {
    return {
      topic: null,
      is_collect: false,
      text: ""
    };
  },
  computed: {
    isLogin() {
      return Boolean(sessionStorage.getItem("token"));
    }
  },
  created() {
    // 获取路由的动态参数     $route
    const { id } = this.$route.params;
    axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
      console.log(res.data.data);
      this.topic = res.data.data;
    });
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changeCollect() {
      const obj = {
        topic_id: this.$route.params.id,
        accesstoken: sessionStorage.getItem("token")
      };
      if (this.is_collect) {
        axios
          .post(`https://www.vue-js.com/api/v1/topic/de_collect`, obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = false;
            }
          });
      } else {
        axios
          .post(`https://www.vue-js.com/api/v1/topic/collect`, obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = true;
            }
          });
      }
    },
    addComment() {
      //
      axios
        .post(`https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`, {
          accesstoken: sessionStorage.getItem("token"),
          content: this.text
        })
        .then(res => {
          // 发送请求成功之后要更新本地的 评论  但是请求的结果只是一个  评论 id 要更新本地的话需要 创建一个评论对象
          // 所以我们换另一个方案 重新请求整个文章数据

          axios
            .get(`https://www.vue-js.com/api/v1/topic/${this.topic.id}`)
            .then(res => {
              this.topic = res.data.data;
            });
        });
    }
  }
};
</script>

<style>
.topic {
  width: 80%;
  margin: 0 auto;
}

.topic article {
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 10px;
}
.topic .article-head {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.topic .article-head > div {
  display: flex;
  align-items: flex-end;
}

.topic .article-head h2 {
  margin: 8px 0 0 0;
  flex-grow: 1;
}
.topic .topic_content {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.markdown-text > :first-child,
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

.topic_content img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

.comment > p {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #f6f6f6;
  margin: 0;
  padding: 10px;
}
.comment ul {
  background-color: #fff;
  margin: 0;
}
</style>
