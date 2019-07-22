<template>
  <div>
    <input type="text" v-model="val" />
    <button @click="add">提交</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "todoform",
  data() {
    return {
      val: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    add() {
      if (this.val.trim()) {
        this.addTodo({
          newTodo: { text: this.val, completed: false },
          clear: this.clear
        });
      } else {
        alert("hahahahahah");
      }
    },
    clear() {
      this.val = "";
    }
  }
};
</script>

<style>
</style>
