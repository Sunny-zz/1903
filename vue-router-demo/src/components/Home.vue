<template>
  <div>
    <h1>home</h1>
    <!-- <div>
      <span
        :style="{color: tabActiveInd === index ? '#00b4d4' : '#000' }"
        @click="tabActiveInd = index"
        v-for="(tab,index) in tabs"
        :key="tab.id"
      >{{tab.tabText}}</span>
    </div>
    <div>
      <div v-show="tabActiveInd === index" v-for="(tab,index) in tabs" :key="tab.id">
        <h2>{{tab.tabText}}</h2>
      </div>
    </div>-->
    <ul class="list">
      <li>
        <router-link to="/welcome/recommended">推荐</router-link>
      </li>
      <li>
        <router-link to="/welcome/backend">后端</router-link>
      </li>
      <li>
        <router-link to="/welcome/frontend">前端</router-link>
      </li>
    </ul>
    <!-- 如果 router-view 组件写在了 某一个路由组件内，那么次 router-view 展示的是该路由组件下的子路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // tabs: [
      //   { id: "12", tabText: "热门" },
      //   { id: "122", tabText: "最新" },
      //   { id: "121", tabText: "热榜" }
      // ],
      // tabActiveInd: 0
    };
  }
};
</script>

<style>
.list {
  list-style: none;
  display: flex;
  width: 40%;
  line-height: 40px;
  padding: 0;
  margin-left: 100px;
  justify-content: space-around;
  background-color: #ccc;
}
</style>
