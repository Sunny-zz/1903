<template>
  <!-- :class=" type==='login' ? 'btn login' : type==='signup' ? 'btn signup': type==='more'? 'btn more' : 'btn'" -->
  <!-- :class="['btn',type]" -->
  <button :style="{color:color}" @click="changeColor" :class="{btn:true,[type]:true}">{{text}}</button>
</template>

<script>
// const obj = {
//   age: 10
// };
// const str = "age";
// console.log(obj[str]);
export default {
  name: "btn",
  data() {
    return {
      color: "#000"
    };
  },
  // 子组件的 props 禁止修改
  //props: ["text", "type"] //完全相当于上面注释的
  // prop 写成对象形式其实就是为了做属性检查
  props: {
    text: {
      type: String,
      // 有了 default 属性 上面就不需要判断了
      default: "默认按钮"
    },
    type: {
      // type 的值是必须从 login  signup  more 中选择一个
      // 验证父组件传递过来的值是否满足条件，不满足报错提示
      validator: function(value) {
        // value 代表父组件传递过来的值
        return ["login", "signup", "more"].indexOf(value) !== -1;
      }
      // 无需默认值可以不设置 default
    },
    clickFun: {
      type: Function
    }
  },
  methods: {
    changeColor() {
      this.color = "#fff";
      // 先看父组件时候传递过来了函数
      if (this.clickFun) {
        this.clickFun();
      }
    }
  }
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
