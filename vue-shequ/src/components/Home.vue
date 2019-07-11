<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link
          :class=" $route.fullPath === '/' || $route.fullPath==='/?tab=all' ? 'active' : ''"
          to="/?tab=all"
        >全部</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=good' ? 'active' : ''" to="/?tab=good">精华</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=weex' ? 'active' : ''" to="/?tab=weex">weex</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=share' ? 'active' : ''" to="/?tab=share">分享</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=ask' ? 'active' : ''" to="/?tab=ask">问答</router-link>
      </li>
      <li>
        <router-link :class="$route.fullPath==='/?tab=job' ? 'active' : ''" to="/?tab=job">招聘</router-link>
      </li>
    </ul>
    <div v-if="topics.length" class="content">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
          <img :style="{width:'30px',height:'30px'}" :src="topic.author.avatar_url" alt />
          <div class="count">
            <span class="reply_count">{{topic.reply_count}}</span>
            <span>/</span>
            <span class="visit_count">{{topic.visit_count}}</span>
          </div>
          <span
            v-if="$route.fullPath === '/' || $route.fullPath==='/?tab=all' || topic.top || topic.good"
            :class="{tab: true,active: topic.top || topic.good}"
          >{{topic.top?'置顶': topic.good ? '精华': topic.tab === 'share'? '分享':topic.tab === 'ask'? '问答' : topic.tab === 'job'? '招聘' : 'weex' }}</span>
          <span class="title">
            <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
          </span>
          <span class="time">{{myMoment(topic.last_reply_at)}}</span>
        </li>
      </ul>
    </div>
    <img
      v-else
      src="https://hbimg.huabanimg.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
      alt
    />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "home",
  data() {
    return {
      topics: []
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}`)
          .then(res => {
            this.topics = res.data.data;
            console.log(res.data.data[0]);
          });
      }
    }
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  }
};
</script>

<style>
.home {
  width: 80%;
  margin: 0 auto;
}
.home > img {
  width: 100%;
}
.home .nav {
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #f6f6f6;
  margin: 0;
  list-style: none;
}
.home .nav li {
  margin-right: 25px;
}

.home .nav li a {
  color: #369219;
  padding: 3px 4px;
  border-radius: 3px;
}
.home .nav li a.active {
  color: #fff;
  background-color: #369219;
}
.home .content {
  background-color: #fff;
}
.home .content ul {
  margin: 0;
  padding: 0;
}
.home .content ul li {
  padding: 13px 10px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
}
.home .content ul li:hover {
  background-color: #f6f6f6;
}
.home .content ul li > img {
  flex-shrink: 0;
}
.home .content ul li .count {
  width: 60px;
  flex-shrink: 0;
  text-align: center;
  font-size: 12px;
}
.home .content ul li .count .reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.home .content ul li .count .visit_count {
  font-size: 10px;
  color: #b4b4b4;
}
.tab {
  flex-shrink: 0;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e5e5e5;
  font-size: 12px;
  height: 20px;
  color: #999;
  margin-right: 5px;
}
.tab.active {
  color: #fff;
  background-color: #369219;
}
.home .content ul li .title {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home .content ul li a {
  color: #333;
}
.home .content ul li a:visited {
  color: #888;
}
.home .content ul li a:hover {
  text-decoration: underline;
}
.home .content ul li .time {
  flex-shrink: 0;
  margin-left: 10px;
}
</style>
