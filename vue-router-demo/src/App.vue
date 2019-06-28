<template>
  <div>
    <h1>vue 路由</h1>
    <div class="header">
      <!-- <span>{{$route.path}}</span> -->
      <ul class="nav">
        <li>
          <!-- 因为  home 有子路由 导致地址发生了变化 所以看首页的子页面的时候  首页的导航变色失效   因为 exact 严格匹配 -->
          <!-- 1.当前地址内 有 welcome 的时候 我的 home 导航匹配规则不需要严格匹配 -->
          <!-- 2.当前地址内 没有 welcome 的时候 我的 home 导航匹配规则需要严格匹配 -->
          <!-- 如何获取当前页面的地址因为我们的地址都是路由改变，获取地址需要去路由文查找 -->
          <!-- vue 路由提供了两个对象供我们去查看路由的相关信息 -->
          <!-- 1. this.$route 获取的是当前页面相关的路由信息对象    path属性:获取当前页面的 url-->
          <!-- 2. this.$router 获取整个你创建好的路由对象 -->
          <!-- 原生  location.href  -->
          <router-link
            to="/"
            active-class="nav-active"
            :exact="$route.path.indexOf('welcome') === -1 ? true : false "
          >首页</router-link>
        </li>
        <li>
          <router-link to="/pins" active-class="nav-active">沸点</router-link>
        </li>
        <li>
          <router-link to="/topics" active-class="nav-active">话题</router-link>
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
.nav-active {
  color: aqua;
}
</style>
