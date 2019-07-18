import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    carts: null
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    },
    getCarts(state, carts) {
      state.carts = carts
    },
    addToCart(state, carts) {
      state.carts = carts
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3008/products").then(res => {
        commit("getProducts", res.data)
      })
    },
    getCarts({ commit }) {
      axios.get("http://localhost:3008/carts").then(res => {
        commit("getCarts", res.data)
        console.log(res.data)
      })
    },
    addToCart({ commit }, payload) {
      // 根据点击的商品的 add to cart 按钮,更新后台数据，触发 mutation
      // add to cart 就点击一次
      axios
        .patch("http://localhost:3008/carts", {
          productByIds: [payload.id],
          quantityById: { [payload.id]: 1 }
        })
        .then(res => {
          console.log(res.data)
          // 返回的更新好的数据
          commit("addToCart", res.data)
        })
    }
  },
  getters: {
    cartProductInfo(state) {
      // [1,2,3]   ===>     [1,8,27]
      // ;[1, 2, 3].map(item => item * item * item)

      const cartProducts = state.carts
        ? state.carts.productByIds.map(item => {
            const product = state.products.find(product => product.id === item)
            return {
              title: product.title,
              price: product.price,
              quantity: state.carts.quantityById[item],
              id: item
            }
          })
        : []

      return cartProducts
      // map   reduce
      // [{
      //    title: 1111,
      //    price: 11111,
      //    quantity: 11111,
      //    id: "1111"
      // }]
    }
  }
})

export default store
