<template>
  <div>
    密码：
    <input type="password" name id v-model="pwd" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      pwd: ""
    };
  },
  created() {},
  methods: {
    login() {
      axios
        .post(`/api/user/login?username=sunny-zz&password=${this.pwd}`)
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>
