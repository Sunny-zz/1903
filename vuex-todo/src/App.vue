<template>
  <div>
    <TodoForm />
    <TodoList />
    <TodoFoot />
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
  }
};
</script>

<style>
</style>
