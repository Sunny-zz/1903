<template>
  <div class="xxx">
    <h1>hello</h1>

    <h2>dksaghd jashg</h2>
    <Button />
  </div>
</template>

<script>
import Button from "./components/Button";
// 组件化开发 把一个项目分成若干个组件       类似于我们之前的公共样式和公共js
export default {
  // 小名 不能和 html 的标签名一样 一般都是小写的，一般是必须的
  name: "app",
  components: {
    Button
  }
};
</script>

<style>
/* 样式全部是全局的 */
.xxx {
  position: relative;
}
</style>


