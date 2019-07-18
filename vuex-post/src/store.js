import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    // 存储的是某篇文章的评论数组不是数据库中全部的评论
    comments: []
  },
  mutations: {
    getPosts(state, posts) {
      // 异步请求不能写在 mutation 函数内
      state.posts = posts
    },
    getComments(state, comments) {
      state.comments = comments
    },
    addComment(state, newComment) {
      state.comments.push(newComment)
    },
    delComment(state, id) {
      state.comments = state.comments.filter(comment => comment.id != id)
    }
  },
  // 当你需要通过异步操作修改 state 时需要将异步操作写在 action 函数内
  // 没有异步一般不需要 action 函数
  actions: {
    getPosts(context) {
      // action 函数 用来提交 mutation 函数 为什么使用 action 提交
      // 因为 action 函数内可以使用异步操作
      // action 函数 可以接受收两个参数
      // action 函数内默认接收一个参数  context(上下文) 这个参数是个对象里面有 commit 方法 用来触发 mutation 函数
      // 第二个参数是 payload(载荷数据)
      axios.get("http://localhost:3008/posts").then(res => {
        // this.$store.commit("getPosts", res.data)
        context.commit("getPosts", res.data)
      })
    },
    getComments({ commit }, payload) {
      axios
        .get(`http://localhost:3008/comments?postId=${payload.id}`)
        .then(res => {
          commit("getComments", res.data)
        })
    },
    addComment({ commit }, payload) {
      axios
        .post("http://localhost:3008/comments", {
          text: payload.val,
          postId: payload.id
        })
        .then(res => {
          commit("addComment", res.data)
          payload.clearInput()
        })
    },
    delComment({ commit }, payload) {
      axios.delete(`http://localhost:3008/comments/${payload.id}`).then(res => {
        commit("delComment", payload.id)
      })
    }
  },
  // store 的计算属性 并不是 组件内 data 的计算属性 功能一样
  getters: {
    currentComments(state) {
      return [...state.comments].reverse()
    }
  }
})
// 修改
// 组件内要修改 store 数据
// 将修改 store 的逻辑在 store.js 写好
// mutations  actions(有异步操作就需要 actions)
// 再到组件内部使用 $store.dispatch 触发 action
