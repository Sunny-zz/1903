import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    carts: {
      productByIds: [],
      quantityById: {}
    }
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    },
    addToCart(state, payload) {
      // 更新本地的 carts
      // 第一次买某件商品
      // 直接修改对象下属性的属性值
      state.carts.productByIds.push(payload.id)
      state.carts.quantityById[payload.id] = 1
      // 直接对对象进行重新赋值
      // state.carts = {
      //   productByIds: [...state.carts.productByIds, payload.id],
      //   quantityById: { ...state.carts.quantityById, [payload.id]: 1 }
      // }
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3008/products").then(res => {
        commit("getProducts", res.data)
      })
    }
  },
  getters: {
    cartProductInfo(state) {
      // [1,2,3]   ===>     [1,8,27]
      // ;[1, 2, 3].map(item => item * item * item)
      const cartProducts =
        state.carts.productByIds.length && state.products.length
          ? state.carts.productByIds.map(item => {
              const product = state.products.find(
                product => product.id === item
              )
              return {
                title: product.title,
                price: product.price,
                quantity: state.carts.quantityById[item],
                id: item
              }
            })
          : []
      console.log(cartProducts)
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
