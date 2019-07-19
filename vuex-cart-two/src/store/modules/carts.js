// import Vue from "vue"
const carts = {
  state: {
    productByIds: [],
    quantityById: {}
  },
  mutations: {
    addToCart(state, payload) {
      if (state.productByIds.indexOf(payload.id) != -1) {
        // Vue.set(state.quantityById, payload.id, {
        //   ...state.carts.quantityById,
        //   [payload.id]: state.carts.quantityById[payload.id] + 1
        // })
        state.quantityById = {
          ...state.quantityById,
          [payload.id]: state.quantityById[payload.id] + 1
        }
      } else {
        state.productByIds.push(payload.id)
        state.quantityById[payload.id] = 1
      }
    },
    delToCart(state, payload) {
      if (state.quantityById[payload.id] > 1) {
        state.quantityById[payload.id]--
      } else {
        state.productByIds = state.productByIds.filter(
          item => item != payload.id
        )
        delete state.quantityById[payload.id]
      }
    }
  },
  actions: {},
  getters: {
    cartProductInfo(state, getters, rootState) {
      const cartProducts =
        state.productByIds.length && rootState.products.all.length
          ? state.productByIds.map(item => {
              const product = rootState.products.all.find(
                product => product.id === item
              )
              return {
                title: product.title,
                price: product.price,
                quantity: state.quantityById[item],
                id: item,
                inventory: product.inventory
              }
            })
          : []
      return cartProducts
    },
    total(state, getters) {
      return getters.cartProductInfo
        .reduce((res, item) => res + item.price * item.quantity, 0)
        .toFixed(2)
    }
  }
}
export default carts
