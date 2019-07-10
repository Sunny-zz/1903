<template>
  <div>
    <div class="cart">
      <img
        v-if="!carts.length"
        src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png"
        alt
      />
      <img
        v-else
        @click="showCart"
        src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png"
        alt
      />
      <div v-if="!carts.length">另需配送￥2.5</div>
      <div v-else @click="showCart">
        <span>{{total}}</span>
        <br />
        <span>另需配送￥2.5</span>
      </div>
      <span v-if="!carts.length" class="cart-right">￥10起送</span>
      <span v-else-if="total < 10" class="cart-right">差￥{{10-total}}起送</span>
      <button v-else class="cart-right">去结算</button>
    </div>
    <div v-show="show" @click="show = false" class="mask"></div>
    <div v-show="show" class="cart-desc">
      <div class="cart-head">
        <span>购物车</span>
        <span @click="$emit('clearCart',function(){show=false})">清空购物车</span>
      </div>
      <div class="cart-list" :style="{maxHeight: '160px'}">
        <div class="cart-food" v-for="cart in carts" :key="cart.id">
          <span>{{cart.name}}</span>
          <span>{{cart.price * cart.num}}</span>
          <div>
            <button @click="$emit('subCart',cart.id,function(){show=false})">-</button>
            <span>{{cart.num}}</span>
            <button @click="$emit('addCart',cart)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  [1,2,3,4,5,6,7,8,9]
// 使用 reduce 筛选出 奇数数组 或 偶数
// const res = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((res, item) => {
//   if (item % 2 != 0) {
//     res.push(item);
//   }
//   return res;
// }, []);
// console.log(res);
export default {
  name: "cart",
  props: ["carts"],
  data() {
    return {
      show: false
    };
  },
  computed: {
    total() {
      // 已知一个数组  把数组内对象的 price * num  的值加在一起
      // let result = 0;
      // this.carts.forEach(ele => (result = result + ele.price * ele.num));
      // console.log(result);
      // 数组的 reduce 方法    返回一个你想要的结果
      // reduce 函数接收两个参数  第一个参数是函数  该函数需要接收至少两个参数 第一个参数是代表最终的结果(reduce 的返回值) 该函数还必须返回一个值作为下次 运行的最终结果的初始值
      // 第二个参数是最终结果(reduce 的返回值)的初始值
      const result = this.carts.reduce((res, item) => {
        return res + item.price * item.num;
      }, 0);
      return result;
    }
  },
  methods: {
    showCart() {
      this.show = !this.show;
    }
  }
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
  margin-left: 20px;
}
.cart > div {
  flex-grow: 1;
  text-align: center;
}
.cart > .cart-right {
  flex-shrink: 0;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.cart-desc {
  position: fixed;
  left: 0;
  bottom: 50px;
  width: 100vw;
  background-color: #fff;
  z-index: 101;
}
.cart-desc .cart-head {
  line-height: 20px;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
.cart-desc .cart-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.cart-desc .cart-list .cart-food {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
}
</style>
