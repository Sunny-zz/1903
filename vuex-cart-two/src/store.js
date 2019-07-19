
import axios from "axios"


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
      // 该商品之前是否买过
      if (state.carts.productByIds.indexOf(payload.id) != -1) {
        // 直接对属性进行修改 不会更新
        // state.carts.quantityById[payload.id] =
        //   state.carts.quantityById[payload.id] + 1
        // state.carts.quantityById[payload.id]++
        //
        // state 已经修改了 但是视图不更新 原因是因为直接对对象下已有的属性进行修改的话不会触发视图更新,vue 底层不会认为这种修改是更新了 state,那么可以对对象进行重新赋值，还可以使用 官方提供的 set 方法
        // 1. 在组件内 this.$set()
        // 2. 在组件外 Vue.set()
        //  set 的用法 set(state下的某个数据,state对象下的某个属性名,改成什么属性值)
        Vue.set(state.carts, "quantityById", {
          ...state.carts.quantityById,
          [payload.id]: state.carts.quantityById[payload.id] + 1
        })
        // 直接对对象进行重新赋值
        // state.carts.quantityById = {
        //   ...state.carts.quantityById,
        //   [payload.id]: state.carts.quantityById[payload.id] + 1
        // }
        // const obj = {
        //   a: 10,
        //   b: 20
        // }
        // const newObj = { ...obj, a: 11 }
        // console.log(newObj)
      } else {
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
    delToCart(state, payload) {
      // carts: {
      //   productByIds: ["1","2"],
      //   quantityById: {"1":2,"2":5}
      // }
      if (state.carts.quantityById[payload.id] > 1) {
        // 只修改 quantityById 里面某个 id 的数量
        // 当 state 内修改新增的属性的属性值 不会触发视图更新
        state.carts.quantityById[payload.id]--
      } else {
        // 1. 删除 productByIds 里面的某个 id
        // 2. 删除 quantityById 某个 id 属性
        state.carts.productByIds = state.carts.productByIds.filter(
          item => item != payload.id
        )
        // 删除对象下的某条属性
        // const obj = {
        //   a: 10,
        //   b: 20
        // }
        // delete obj.a
        // console.log(obj)
        delete state.carts.quantityById[payload.id]
      }
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
                id: item,
                inventory: product.inventory
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
    },
    total(state, getters) {
      // 依据另外一个 getters cartProductInfo 计算总价
      return getters.cartProductInfo.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      )
    }
  }
})

export default store
