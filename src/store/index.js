import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setCountValue(state, data) {
      state.count = data
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  actions: {
    addAction(context) {
      context.commit('setCountValue', this.getters.getCount + 1)
    },
    minusAction(context) {
      context.commit('setCountValue', this.getters.getCount - 1)
    }
  },
  modules: {}
})
export default store
