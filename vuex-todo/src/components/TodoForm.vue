<template>
  <div>
    <input type="text" :value="val" @input="handleInput" />
    <button @click="add">提交</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "todoform",
  computed: {
    val() {
      return this.$store.state.val;
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    add() {
      if (this.val.trim()) {
        this.addTodo({
          newTodo: { text: this.val, completed: false }
        });
      } else {
        alert("hahahahahah");
      }
    },

    handleInput() {
      // console.log(event.target.value);
      // 获取输入的内容用来触发 mutation
      this.$store.commit("changeVal", event.target.value);
    }
  }
};
</script>

<style>
</style>
