<template>
  <div>
    <h2>首页</h2>
    <ul>
      <li>
        <!-- @click.native  给组件的原生标签绑定事件 -->
        <router-link
          :class="$route.fullPath.indexOf('popular') !=-1 ||  $route.fullPath === '/'  ? 'active' : ''"
          @click.native="change('popular')"
          to="/?sort=popular"
        >热门</router-link>
      </li>
      <li>
        <router-link
          :class=" $route.fullPath.indexOf('newest') !=-1 ? 'active' : ''"
          @click.native="change('newest')"
          to="/?sort=newest"
        >最新</router-link>
      </li>
      <li>
        <router-link
          :class="$route.fullPath.indexOf('hottest') !=-1 ? 'active' : ''"
          @click.native="change('hottest')"
          to="/?sort=three_days_hottest"
        >热榜</router-link>
      </li>
    </ul>
    <Topics :topics="topics" />
  </div>
</template>

<script>
import Topics from "./Topics.vue";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      type: "popular"
    };
  },
  // 监听 data  route 的变化去执行某个函数
  // 频繁更改 data 需要做某个操作
  // 当页面地址发生改变但是生命周期钩子不会触发 此时你还需要在地址更改的时候做一些操作 就需要使用 watch 监听路由的变化
  // 用法   watch 是一个对象 对象下只能写方法 方法的属性名就是要监听的 data 或 路由地址 ,该方法会在 data  或者  路由地址更改的时候自动执行
  watch: {
    "$route.fullPath": function() {
      console.log("111");
    }
  },
  created() {
    console.log("初始化 data");
    // 使用 axios 发请求 更新 数据
    // 默认获取 热门的数据
    this.getTopics();
  },
  components: {
    Topics
  },
  methods: {
    change(type) {
      // console.log("11111");
      // 重新获取后台数据
      // 清空数组以及重新获取数据在当前页面只需要执行一次即可
      if (this.type === type) {
        console.log("type 改过了 别瞎点");
      } else {
        console.log("更改 type");
        this.type = type;
        this.topics = [];
        this.getTopics(type);
      }
    },
    getTopics(type = "popular") {
      // 获取数据的函数
      axios.get(`http://localhost:3008/topics?${type}=true`).then(res => {
        // console.log(res.data);
        setTimeout(() => {
          this.topics = res.data;
        }, 1000);
      });
    }
  }
};
</script>

<style>
</style>
