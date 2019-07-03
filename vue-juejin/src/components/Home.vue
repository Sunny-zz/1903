<template>
  <div>
    <h2>首页</h2>
    <ul>
      <li>
        <router-link to="/?sort=popular">热门</router-link>
      </li>
      <li>
        <router-link to="/?sort=newest">最新</router-link>
      </li>
      <li>
        <router-link to="/?sort=three_days_hottest">热榜</router-link>
      </li>
    </ul>
    <Topics />
  </div>
</template>

<script>
import Topics from "./Topics.vue";
export default {
  name: "home",
  components: {
    Topics
  }
};
</script>

<style>
</style>
