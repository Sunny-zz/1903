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
                <button v-if="carts.find(item => item.id === food.id)" @click="subCart(food.id)">-</button>
                <span
                  v-if="carts.find(item => item.id === food.id)"
                >{{carts.find(item => item.id === food.id).num}}</span>
                <button @click="addCart(food)">+</button>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <Cart :carts="carts" @addCart="addCart" @subCart="subCart" @clearCart="clearCart" />
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
    axios.get("http://localhost:3008/carts").then(res => {
      // 获取网上数据更新本地
      this.carts = res.data;
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
      // 各种判断 判断 此商品买过没买过
      if (this.carts.find(item => item.id === food.id)) {
        // 买过了
        axios
          .patch(`http://localhost:3008/carts/${food.id}`, {
            num: this.carts.find(item => item.id === food.id).num + 1
          })
          .then(res => {
            // 更新本地的 data  carts  一定要根据后台数据更新
            // 更新数组内某个对象的属性的属性值
            this.carts.find(item => item.id === food.id).num = res.data.num;
          });
      } else {
        // 没买过
        axios
          .post("http://localhost:3008/carts", { ...food, num: 1 })
          .then(res => {
            console.log(res.data);
            this.carts.push(res.data);
          });
      }
      // 向后 http://localhost:3008/carts 发送 post ,参数 { food 数据, num : 1}
    },
    subCart(id, closeCart) {
      // 较少购物车中对应商品的数量
      // 商品个数>1    path 更新 num
      // 商品个数=1    delete 删除此条数据
      if (this.carts.find(item => item.id === id).num > 1) {
        // 买过了
        axios
          .patch(`http://localhost:3008/carts/${id}`, {
            num: this.carts.find(item => item.id === id).num - 1
          })
          .then(res => {
            // 更新本地的 data  carts  一定要根据后台数据更新
            // 更新数组内某个对象的属性的属性值
            this.carts.find(item => item.id === id).num = res.data.num;
          });
      } else {
        axios.delete(`http://localhost:3008/carts/${id}`).then(res => {
          //  更新本地数据
          this.carts = this.carts.filter(item => item.id != id);
          // 如果使用的购物车内的减号减到没有了
          // 关闭购物车弹窗
          // 因为如果点击的不是购物车的减号就不会传递关闭购物车弹窗的函数
          if (closeCart && !this.carts.length) {
            // console.log(closeCart);
            closeCart();
          }
        });
      }
    },
    clearCart(closeCart) {
      // 需要使用 for 发送很多个 delte 请求  还得保证所有请求完毕之后才执行 closeCart 和清空本地 carts 数据
      // Promise.all()
      // carts   --------->     [axios.delete(xxxx),axios.delete(xxx),...]
      // 从一个数组变成另外一个数组 个数不变       映射    数组的 map 方法
      const arr = this.carts.map(item =>
        axios.delete(`http://localhost:3008/carts/${item.id}`)
      );
      Promise.all(arr).then(res => {
        this.carts = [];
        closeCart();
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
