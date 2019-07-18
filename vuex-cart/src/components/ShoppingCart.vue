<template>
  <div>
    <h2>carts</h2>
    <ul v-if="cartProducts.length">
      <li v-for="goods in cartProducts" :key="goods.id">
        <span>{{goods.title}}</span>&nbsp;&nbsp;&nbsp;
        <span>{{goods.price}}</span>&nbsp;&nbsp;&nbsp;x
        <span>{{goods.quantity}}</span>
      </li>
    </ul>
    <div v-else>买点吧</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "shoppingcart",
  created() {
    this.$store.dispatch("getCarts");
    // 测试更新后台的 carts 数据
    // axios
    //   .patch("http://localhost:3008/carts", { productByIds: ["1", "2"],quantityById:{"1":3,"2":4} })
    //   .then(res => {
    //     console.log(res);
    //   });
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProductInfo;
    }
  }
};
</script>

<style>
</style>
