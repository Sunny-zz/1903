<template>
  <div class="cart">
    <img
      src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png"
      alt
    />
    <div>另需配送￥2.5</div>
    <span class="cart-right">￥10起送</span>
    <!-- <button class="cart-right">去结算</button> -->
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ["carts"]
};
</script>

<style>
.cart {
  position: fixed;
  bottom: 0;
  height: 50px;
  background-color: #ccc;
  left: 0;
  width: 100vw;
  z-index: 999;
  display: flex;
  align-items: center;
}
.cart img {
  width: 50px;
  flex-shrink: 0;
  margin-left: 10px;
}
.cart > div {
  flex-grow: 1;
  text-align: center;
  margin: 0 10px;
}
.cart > .cart-right {
  flex-shrink: 0;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
