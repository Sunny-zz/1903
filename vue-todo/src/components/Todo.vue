<template>
  <div>
    <ul v-if="showTodos.length">
      <li v-for="todo in showTodos" :key="todo.id">
        <span
          @click="$emit('completed',todo)"
          :class="{'todo-active': todo.isCompleted}"
        >{{todo.text}}</span>
        <button>x</button>
      </li>
    </ul>
    <div class="todo-footer">
      <span>{{`${activeNum} ${activeNum === 1? 'item' : 'items'} left`}}</span>
      <div>
        <span @click="type='all'">all</span>
        <span @click="type='active'">active</span>
        <span @click="type='completed'">completed</span>
      </div>
      <span>clear completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      type: "completed"
    };
  },
  props: ["todos"],
  computed: {
    activeNum() {
      return this.todos.filter(todo => !todo.isCompleted).length;
    },
    showTodos() {
      return this.todos.filter(todo =>
        this.type === "all"
          ? true
          : this.type === "active"
          ? !todo.isCompleted
          : todo.isCompleted
      );
    }
  }
};
</script>

<style>
.todo-footer {
  display: flex;
}
span {
  margin-right: 15px;
  user-select: none;
}
.todo-footer span {
  margin-right: 15px;
}
.todo-active {
  text-decoration: line-through;
  color: #ccc;
}
</style>
