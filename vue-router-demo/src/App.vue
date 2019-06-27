<template>
  <div>
    <h1>vue 路由</h1>
    <div class="header">
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/pins">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics">话题</router-link>
        </li>
      </ul>
    </div>
    <!-- 展示 首页 或者 沸点页 或者 话题页 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.header {
  width: 100%;
  background-color: #ccc;
}
.nav {
  list-style: none;
  display: flex;
  width: 60%;
  line-height: 80px;
  padding: 0;
  margin: 0 auto;
  justify-content: space-around;
}
</style>
