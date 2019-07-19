<template>
  <div>
    <h1>vuex shopping cart</h1>
    <span>{{obj}}</span>
    <br />
    <span>a:{{obj.a}}</span>
    <br />
    <span>b:{{obj.b}}</span>
    <br />
    <button @click="change">按钮</button>
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
  },
  data() {
    return {
      obj: {
        a: 10
      }
    };
  },
  methods: {
    change() {
      // 更新已有对象下的属性的属性值  可以更新
      // this.obj.a = 20;
      // 直接添加新的属性不触发视图更新 使用 set
      this.$set(this.obj, "b", 20);
      // this.obj.b = 20;
      console.log(this.obj);
    }
  }
};
</script>

<style>
</style>
