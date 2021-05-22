import AddButton from './AddButton.vue'
import Counter from './Counter.vue'

export default {
  install(Vue) {
    Vue.component(AddButton.name, AddButton)
    Vue.component(Counter.name, Counter)
  }
}
