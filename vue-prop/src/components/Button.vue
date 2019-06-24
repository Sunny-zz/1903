<template>
  <!-- :class=" type==='login' ? 'btn login' : type==='signup' ? 'btn signup': type==='more'? 'btn more' : 'btn'" -->
  <!-- :class="['btn',type]" -->
  <button :class="{btn:true,[type]:true}">{{text ? text : '默认按钮'}}</button>
</template>

<script>
// const obj = {
//   age: 10
// };
// const str = "age";
// console.log(obj[str]);
export default {
  name: "btn",
  // data() {
  //   return {
  //     text: "父组件传过来的"
  //   };
  // },
  // 子组件的 props 禁止修改
  props: ["text", "type"] //完全相当于上面注释的
};
</script>

<style>
/* style 内不能使用 js */
.btn {
  border: 0;
  outline: none;
  padding: 0 10px;
  height: 32px;
  line-height: 1.5;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}
.btn.login {
  /* 登陆的样式 */
  background-color: #1890ff;
}
.btn.signup {
  /* 注册的样式 */
  background-color: rgb(230, 76, 115);
}
.btn.more {
  /* 显示更多的样式 */
  color: aqua;
  background: none;
}
</style>
