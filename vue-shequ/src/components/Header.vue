<template>
  <div class="header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <img src="https://www.vue-js.com/public/images/vue.png" alt />
        <h1>Vue.js</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tou"
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
}
</style>
