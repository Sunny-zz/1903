<template>
  <div>
    <TodoForm />
    <TodoList />
    <TodoFoot />
    <!-- v-model 双向绑定直接绑定 vuex 中的数据是不可以的  实现不了双向绑定 -->
    <!-- 可以配合 computed 的 set  -->
    <input type="text" v-model="text" />
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFoot from "./components/TodoFoot";
export default {
  name: "app",
  components: {
    TodoForm,
    TodoFoot,
    TodoList
  },
  computed: {
    // text 是组件的计算属性，计算的是 vuex 中的数据 text
    // 当计算属性写成一个对象时 (不是函数) 对象下有两个属性
    // 1. get 用来获取计算属性结果 必须 return
    // 2. set 是一个函数当 计算属性 text 被修改的时候 自动触发 set 函数,set 函数的参数是就是改好之后的 text
    text: {
      get() {
        return this.$store.state.text;
      },
      set(newText) {
        this.$store.commit("changeText", newText);
      }
    }
  }
};
</script>

<style>
</style>
