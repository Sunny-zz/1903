<template>
  <div>
    <h1 :class="isActive? 'title active' : 'title' ">组件的 Data 测试</h1>
    <button @click="handleClick">按钮</button>
    <br>
    <br>
    <br>
    <button @click="handleBtn">控制消失和出现</button>
    <div v-show="show" class="box"></div>
    <div v-if="showBox1" class="box1">git 图</div>
    <div v-else class="box2"></div>
    <div v-if="!carts.length">数据没有来，展示 gif 图</div>
    <div v-else class="carts">
      <!-- v-for 遍历了 数据 carts   cart 是自己命的名字 代表的是数组内的元素   假如想要在遍历的时候使用索引值 需要写成这样 v-for="(cart ,index)  in  carts"  index就代表对应索引值 -->
      <div class="goods" v-for="(cart,index) in carts" :key="cart.id">
        <span>名称: {{cart.goodsName}}</span>
        <span>索引值: {{index}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      // 该对象内的属性成为 data 的数据
      // 数据变页面就变
      isActive: false,
      show: true,
      showBox1: true,
      carts: [
        {
          id: "xdg12",
          goodsName: "mac book pro",
          price: 12000,
          num: 1
        },
        {
          id: "djashg12",
          goodsName: "奥迪A8",
          price: 1200000,
          num: 1
        }
      ]
    };
  },
  methods: {
    handleClick() {
      // 获取数据
      console.log(this.isActive);
      this.isActive = !this.isActive;
    },
    handleBtn() {
      // 控制box   v-show
      // this.show = !this.show;
      // 控制box1  v-if
      this.showBox1 = !this.showBox1;
    }
  }
};
</script>

<style>
.title {
  margin: 0;
  font-weight: normal;
  font-size: 40px;
}
.active {
  color: teal;
}
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: #00b3d4;
}
.box2 {
  width: 200px;
  height: 200px;
  background-color: hotpink;
}
</style>


