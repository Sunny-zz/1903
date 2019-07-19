import axios from "axios"
const products = {
  state: {
    all: []
  },
  mutations: {
    getProducts(state, products) {
      state.all = products
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3008/products").then(res => {
        console.log(res.data)
        commit("getProducts", res.data)
      })
    }
  },
  getters: {}
}
export default products
