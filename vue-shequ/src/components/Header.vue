<template>
  <div class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="https://www.vue-js.com/public/images/vue.png" alt />
        <h1>Vue.js</h1>
      </router-link>
      <div v-if="!userInfo" class="login">
        <input type="text" v-model="text" />
        <button @click="login">登录</button>
      </div>
      <div v-else class="logout">
        <img :src="userInfo.avatar_url" alt />
        <button @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
// 存储登录状态    一般使用浏览器的本地存储功能     1. cookie       2. localStorage   3.sessionStorage
// local 和 session 的区别   local 一直存储直到你不想存了      session 关闭窗口就消失
// 用法   一般存储安全信息
// 存储  localStorage.setItem('属性名','属性值')        sessionStorage.setItem('属性名','属性值')
// 获取  localStorage.getItem('属性名')   session用法一致
// 清空  localStorage.removeItem('属性名')   localStorage.clear()全部清除  session用法一致
// 存储的属性值不能是对象类型 一般存 boolean number string
// 存储的数据可以再浏览器的 开发者工具(f12) 下的 Application 内查看

import axios from "axios";
export default {
  name: "tou",
  data() {
    return {
      text: "79b3b12e-9631-467b-9210-c68449c98a35",
      userInfo: null
    };
  },
  created() {
    // 获取存储好的 token ，依据这个 token 向后台获取数据更新登录状态
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.userInfo = res.data;
        });
    }
  },
  methods: {
    login() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.text
        })
        .then(res => {
          console.log(res.data);
          this.userInfo = res.data;
          // 将得到的信息存储到本地浏览器
          sessionStorage.setItem("token", this.text);
          sessionStorage.setItem("user_id", res.data.id);
          // sessionStorage.setItem('token',this.text)
        });
    },
    logout() {
      this.userInfo = null;
      // sessionStorage.removeItem("token");
      sessionStorage.clear();
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 55px;
  background-color: #1c6132;
  margin-bottom: 20px;
}
.header-inner {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-inner > .logo {
  display: flex;
  align-items: center;
  height: 55px;
  color: #fff;
}
.header-inner > .logo > img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}
.header-inner > .logo > h1 {
  margin: 0;
  font-size: 24px;
}
.header-inner .logout {
  display: flex;
  align-items: center;
}
.header-inner .logout > img {
  width: 45px;
  margin-right: 5px;
}
.header-inner .logout > button {
  align-self: flex-end;
}
</style>
