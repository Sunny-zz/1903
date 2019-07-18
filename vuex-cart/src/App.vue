<template>
  <div>
    <h1>vuex shopping cart</h1>
    <hr />
    <Products />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
export default {
  name: "app",
  components: {
    Products,
    ShoppingCart
  }
};
</script>

<style>
</style>
