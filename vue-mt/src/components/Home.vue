<template>
  <div class="home">
    <header>
      <h1>第嘉小吃</h1>
    </header>
    <div class="nav">
      <router-link active-class="active" to="/order">点菜</router-link>
      <router-link active-class="active" to="/comments">评价</router-link>
      <router-link active-class="active" to="/shop">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script >
export default {
  name: "home"
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header {
  flex-shrink: 0;
  background-color: #86b6bd;
}
header h1 {
  margin: 20px 0;
  text-align: left;
}
.nav {
  display: flex;
  line-height: 50px;
  justify-content: space-around;
  flex-shrink: 0;
}
.nav a {
  flex-grow: 1;
  text-align: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.active {
  color: yellowgreen;
  background-color: #ccc;
}
</style>
