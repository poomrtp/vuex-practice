import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    products: [],
    headers: [
      {
        text: 'Name',
        align: 'start',
        filterable: false,
        value: 'name'
      },
      { text: 'Price', value: 'price' },
      { text: 'Quantity', value: 'qty' },
      { text: 'Status', value: 'status' }
    ]
  },
  mutations: {
    setCountValue(state, data) {
      state.count = data
    },
    setProductList(state, data) {
      state.products = data
    },
    setProductListHeader(state, data) {
      state.headers = data
    }
  },
  getters: {
    getCount(state) {
      return state.count
    },
    getProductHeader(state) {
      return state.headers
    },
    getProduct(state) {
      return state.products
    }
  },
  actions: {
    addAction(context) {
      context.commit('setCountValue', this.getters.getCount + 1)
    },
    minusAction(context) {
      context.commit('setCountValue', this.getters.getCount - 1)
    },
    loadProductList(context) {
      context.commit('setProductListHeader', this.getters.getProductHeader)
      context.commit('setProductList', this.getters.getProduct)
    },
    async fetchProduct({ commit }, params) {
      // console.log(params)
      if (params != null) {
        const response = await axios
          .post(`https://testapibackend.herokuapp.com/product/search`, { name: params })
          .then((response) => {
            return response.data.data
          })
        commit('setProductList', response)
      } else {
        const response = await axios
          .get('https://testapibackend.herokuapp.com/product/get')
          .then((response) => {
            return response.data.data
          })
        commit('setProductList', response)
      }
    }
    // addProduct({ commit }, params) {

    //   commit('setProductList', response)
    // }
  },
  modules: {}
})
export default store
