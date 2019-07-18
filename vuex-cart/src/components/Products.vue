<template>
  <div>
    <h2>商品列表</h2>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <p>
          <span>{{product.title}}</span>&nbsp;&nbsp;
          <span>￥{{product.price}}</span>
        </p>
        <button @click="$store.commit('addToCart',{id:product.id})">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "products",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style>
</style>
