<template>
  <div v-if="goods.length">
    <cube-scroll-nav
      :data="goods"
      :side="true"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler"
    >
      <cube-scroll-nav-panel
        v-for="item in goods"
        :key="item.id"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="food in item.foods" :key="food.id">
            <div>
              <img :src="food.icon" />
              <p>{{food.name}}</p>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
  <div v-else>稍等...</div>
</template>

<script>
import axios from "axios";
export default {
  name: "order",
  data() {
    return {
      goods: [],
      current: ""
    };
  },
  created() {
    axios.get("http://localhost:3008/goods").then(res => {
      setTimeout(() => {
        this.goods = res.data;
        this.current = this.goods[0].name;
      }, 500);
    });
  },
  methods: {
    changeHandler(label) {
      console.log("changed to:", label);
    },
    stickyChangeHandler(current) {
      console.log("sticky-change", current);
    }
  }
};
</script>

<style>
.cube-scroll-wrapper {
  height: 400px;
}
.cube-sticky-fixed {
  position: static;
}
</style>
