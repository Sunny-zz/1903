import axios from "axios"
const todos = {
  state: {
    all: []
  },
  mutations: {
    getTodos(state, todos) {
      state.all = todos
    },
    addTodo(state, newTodo) {
      state.all.push(newTodo)
    },
    delTodo(state, id) {
      state.all = state.all.filter(todo => todo.id != id)
    },
    changeTodo(state, id) {
      state.all.find(item => item.id === id).completed = !state.all.find(
        item => item.id === id
      ).completed
    }
  },
  actions: {
    getTodos({ commit }) {
      axios.get("http://localhost:3008/todos").then(res => {
        commit("getTodos", res.data)
      })
    },
    addTodo({ commit }, payload) {
      axios.post("http://localhost:3008/todos", payload.newTodo).then(res => {
        commit("addTodo", res.data)
        // 要执行清空 val 的 mutation
        commit("clearInput")
      })
    },
    delTodo({ commit }, payload) {
      axios.delete(`http://localhost:3008/todos/${payload.id}`).then(() => {
        commit("delTodo", payload.id)
      })
    },
    changeTodo({ commit }, payload) {
      axios
        .patch(`http://localhost:3008/todos/${payload.id}`, {
          completed: !payload.completed
        })
        .then(res => {
          commit("changeTodo", res.data.id)
        })
    }
  },
  getters: {
    showTodos(state, getters, rootState) {
      return state.all.filter(item =>
        rootState.filter.type === "all"
          ? true
          : rootState.filter.type === "active"
          ? !item.completed
          : item.completed
      )
    },
    activeNum(state) {
      return state.all.filter(item => !item.completed).length
    }
  }
}

export default todos
