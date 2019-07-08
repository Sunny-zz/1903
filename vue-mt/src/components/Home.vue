<template>
  <div>
    <header>
      <h1>第嘉小吃</h1>
    </header>
    <div>
      <div class="nav">
        <router-link active-class="active" to="/order">点菜</router-link>
        <router-link active-class="active" to="/comments">评价</router-link>
        <router-link active-class="active" to="/shop">商家</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.nav {
  display: flex;
  line-height: 50px;
  justify-content: space-around;
}
.nav a {
  flex-grow: 1;
  text-align: center;
}
.active {
  color: yellowgreen;
  background-color: #ccc;
}
</style>
