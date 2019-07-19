<template>
  <div>
    <h2>carts</h2>
    <div v-if="cartProducts.length">
      <ul>
        <li v-for="goods in cartProducts" :key="goods.id">
          <span>{{goods.title}}</span>&nbsp;&nbsp;&nbsp;
          <span>{{goods.price}}</span>&nbsp;&nbsp;&nbsp;x
          <span>{{goods.quantity}}</span>
          <button
            :disabled="goods.quantity >= goods.inventory ? true : false"
            @click="addToCart({id:goods.id})"
          >+</button>
          <button @click="delToCart({id:goods.id})">-</button>
        </li>
      </ul>
      <div>总价: ￥{{total}}</div>
    </div>
    <div v-else>买点吧</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "shoppingcart",
  // computed: {
  //   cartProducts() {
  //     return this.$store.getters.cartProductInfo;
  //   },
  //   total() {
  //     return this.$store.getters.total;
  //   }
  // },
  computed: {
    ...mapGetters({
      cartProducts: "cartProductInfo",
      total: "total"
    })
    // ...mapGetters(["total", "cartProductInfo"])
  },
  methods: {
    ...mapMutations(["addToCart", "delToCart"])
  }
};
</script>

<style>
</style>
