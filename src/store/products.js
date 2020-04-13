export default {
  state: {
    products: [
      {
        id: 1,
        productName: 'Бананы',
        isVisible: false
      },
      {
        id: 2,
        productName: 'Картофель',
        isVisible: false
      },
      {
        id: 3,
        productName: 'Помидоры',
        isVisible: false
      }
    ]
  },
  mutations: {
    addProduct (state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    addProduct ({commit}, payload) {
      payload.id = Math.random()
      commit('addProduct', payload)
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    }
  }
}
