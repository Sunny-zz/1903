<template>
  <div v-if="todos.length">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span
          :style="{userSelect: 'none',textDecoration: todo.completed ? 'line-through' : 'none'}"
          @click="changeTodo({id: todo.id,completed: todo.completed})"
        >{{todo.text}}</span>
        <button @click="delTodo({id:todo.id})">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "todolist",
  computed: {
    ...mapState({
      todos: state => state.todos.all
    })
  },
  created() {
    this.$store.dispatch("getTodos");
  },
  methods: {
    ...mapActions(["delTodo", "changeTodo"])
  }
};
</script>

<style>
.c {
  text-decoration: line-through;
}
</style>
