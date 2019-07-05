<template>
  <div class="app">
    <h1 class="title">Vue UI</h1>
    <!-- <el-button :style="{width: '200px',backgroundColor: 'red'}" @click="xxx" type="warning">按钮</el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="success">成功</el-button>
    <el-carousel :style="{width: '1000px'}" :interval="4000" type="card">
      <el-carousel-item>
        <img src="./assets/1.webp" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./assets/2.webp" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./assets/3.webp" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./assets/4.webp" alt />
      </el-carousel-item>
      <el-carousel-item>
        <img src="./assets/5.jpg" alt />
      </el-carousel-item>
    </el-carousel>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    xxx() {
      console.log("xxxxxxx");
    }
  }
};
</script>

<style  lang="scss">
/* scss  sass less   ----->    css  的扩展 */
/* 安装  sass    1. 安装  node-sass  sass-loader 工具包   */
// @import "./assets/color.scss";
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 14px;
//   opacity: 0.75;
//   line-height: 200px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
// img {
//   width: 100%;
// }
// .app {
//   .title {
//     font-size: 50px;
//     &:hover {
//       color: $publicColor;
//     }
//   }
// }
</style>
