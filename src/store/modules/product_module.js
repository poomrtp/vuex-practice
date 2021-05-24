import Vuex from 'vuex'
import axios from 'axios'

const productModule = new Vuex.Store({
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
    async fetchProduct({ commit }) {
      const response = await axios
        .get('https://testapibackend.herokuapp.com/product/get')
        .then((response) => {
          // console.log(response)
          // commit('setProductList', response.data.data)
          return response.data.data
        })
      // let keys = Object.keys(response[0])
      // console.log(keys)
      commit('setProductList', response)
    }
  },
  modules: {}
})
export default productModule
