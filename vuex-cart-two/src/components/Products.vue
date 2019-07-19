<template>
  <div>
    <h2>商品列表</h2>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <p>
          <span>{{product.title}}</span>&nbsp;&nbsp;
          <span>￥{{product.price}}</span>
        </p>
        <button
          :disabled="quantityById[product.id] >= product.inventory ? true : false "
          @click="$store.commit('addToCart',{id:product.id})"
        >add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
// vuex 提供了一些辅助函数    方便组件和 vuex 做交互
// 1. mapState    mapState 是一个函数该函数需要接受一个对象作为参数,该对象内只能写方法 方法内默认接收一个参数是 state(vuex 的数据),该方法的返回值就是组件要获取的 vuex 数据, mapState 函数会默认返回方法内传递的对象
export default {
  name: "products",
  // computed: {
  //   products() {
  //     return this.$store.state.products;
  //   },
  //   quantityById() {
  //     return this.$store.state.carts.quantityById;
  //   }
  // },
  computed: {
    ...mapState({
      products: state => state.products.all,
      // 下面是简写
      // products: "products",
      quantityById: state => state.carts.quantityById
      // 当你需要用的组件内的一些方法或数据时需要把函数写成普通函数
    })
    // 组件自己的计算属性
    // 此种写法需要你的计算属性和vuex的数据名称相同
    // ...mapState(["products"])
  },
  created() {
    // 要触发 products 模块的 action
    console.log(this.$store);
    this.$store.dispatch("getProducts");
  }
};
</script>

<style>
</style>
