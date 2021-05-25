import Counter from './Counter.vue'

export default {
  install(Vue) {
    Vue.component(Counter.name, Counter)
  }
}
