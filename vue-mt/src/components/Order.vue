<template>
  <div class="order">
    <cube-scroll-nav v-if="goods.length" :data="goods" :side="true" :current="current">
      <cube-scroll-nav-panel
        v-for="item in goods"
        :key="item.id"
        :label="item.name"
        :title="item.name"
      >
        <ul>
          <li v-for="food in item.foods" :key="food.id">
            <div class="food">
              <img :src="food.icon" />
              <p>{{food.name}}</p>
              <div>
                <button>-</button>
                <span>0</span>
                <button @click="addCart(food)">+</button>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <Cart :carts="carts" />
  </div>
</template>

<script>
import axios from "axios";
import Cart from "./Cart";
export default {
  name: "order",
  data() {
    return {
      goods: [],
      current: "热销榜",
      carts: []
    };
  },
  components: {
    Cart
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
    // changeHandler(label) {
    //   console.log("changed to:", label);
    // },
    // stickyChangeHandler(current) {
    //   console.log("sticky-change", current);
    // },
    addCart(food) {
      console.log("xxxx");
      // 各种判断
      // 向后 http://localhost:3008/carts 发送 post ,参数 { food 数据, num : 1}
      axios
        .post("http://localhost:3008/carts", { ...food, num: 1 })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style>
.order {
  flex-grow: 1;
  display: flex;
}
.cube-scroll-nav {
  flex-grow: 1;
  padding-bottom: 50px;
}
.cube-scroll-nav-panel-title {
  font-size: 16px;
  background-color: #fff;
  margin: 0;
  padding: 5px 0;
  font-weight: normal;
}
</style>
