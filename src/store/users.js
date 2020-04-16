export default {
  state: {
    users: []
  },
  mutations: {
    addUser (state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    addUser ({commit}, payload) {
      payload.id = Math.random()
      commit('addUser', payload)
    }
  },
  getters: {}
}
