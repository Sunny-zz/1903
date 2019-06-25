<template>
  <div title="card" class="card">
    <img class="pic" :src="imgUrl" alt>
    <p class="title">{{title}}</p>
    <a class="link" :href="linkHref">{{linkText}}</a>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "default title"
    },
    linkText: {
      type: String,
      default: "www.baidu.com"
    },
    linkHref: {
      type: String,
      default: "https://www.baidu.com"
    }
  }
};
</script>

<style scoped>
/* 样式标签加了 scoped 属性，这个样式标签内写的所有样式虽然是全局的但是所有选择器会添加一个属性选择器 */
/* 类似  .card[data-v-xxxxx]   每一个组件 xxxxx 都是不一样的*/

.card {
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  text-align: center;
  padding-bottom: 10px;
}
.card .pic {
  width: 100%;
}
/* text-align   line-height  只能给块元素写 */
.card .title {
  font-size: 18px;
}
.card .link {
  text-decoration: none;
  font-size: 16px;
  color: aliceblue;
}
</style>
