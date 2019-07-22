<template>
  <div>
    <input ref="firstInput" class="first" type="text" v-model="firstName" />
    <input type="text" v-model="lastName" v-focus="true" />
    <input type="text" v-model="fullName" />
    <div>全名: {{fullName}}</div>
    <br />
    <br />
    <span>{{num}}</span>
    <button @click="change">按钮</button>
  </div>
</template>

<script>
import { myMixin } from "./mixins";
export default {
  name: "app",
  mixins: [myMixin],
  data() {
    return {
      // fullName: "foo bar",
      firstName: "foo",
      lastName: "bar",
      num: 0
    };
  },
  mounted() {
    // vue 组件内不推荐使用 获取真实 dom 节点的方法，推荐使用组件的 refs ,如果给组件写了 ref 属性可以拿到 该组件
    //  例如在父组件内   <Button ref='btn'/>  在父组件内使用  this.$refs.btn 获取的是就是组件 Button ,组件内的 data  methods  computed ... 都能获取。
    // document.querySelector(".first").focus();
    // this.$refs.firstInput.focus();
  },
  computed: {
    // 更改计算属性，更新 data ，需要设置计算属性的 setter
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newVal) {
        this.firstName = newVal.split(" ")[0];
        this.lastName = newVal.split(" ")[1];
      }
    }
  },
  // 组件内的自定时指令
  // directives: {
  //   focus: {
  //     inserted: function(el, binding) {
  //       // 聚焦元素
  //       if (binding.value) {
  //         el.focus();
  //       }
  //     }
  //   }
  // }
  methods: {
    change() {
      this.num = 10;
      // 获取不到真实的 更新后 dom 就使用 nextTick 获取
      this.$nextTick(function() {
        console.log(document.querySelector("span"));
      });
    }
  }
};
</script>

<style>
</style>
