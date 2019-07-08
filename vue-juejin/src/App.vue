<template>
  <div>
    <div class="header">
      <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt />

      <ul class="nav">
        <li>
          <router-link to="/" :class="$route.path === '/' ? 'active' : ''">首页</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/pins">沸点</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/huati">话题</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.nav {
  display: flex;
  width: 60%;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  background-color: #ccc;
  margin: 0 auto;
}
.active {
  color: #00b3d4;
}
</style>
