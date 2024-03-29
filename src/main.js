import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  // pageTrackerEnabled: false, // page tracker disabled
  pageTrackerEnabled: true, // page tracker enabled
  // pageTrackerScreenviewEnabled: true,
  config: {
    id: 'G-88VRSTQCQE',
    params: {
      send_page_view: false
    }
  }
})
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
