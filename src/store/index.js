import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      title: '',
      state: false,
      color: 'info'
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading.title = payload.title
      state.loading.state = payload.state
    }
  },
  actions: {
    setLoading({ commit }, value) {
      commit('setLoading', value)
    }
  },
  modules: {
  }
})
