<template>
  <div>
    <h1>{{ $store.getters.getCount }}</h1>
    <span>
      <minus-button @click="minus('minus-button')"></minus-button>
    </span>
    <span>
      <add-button @click="add('add-button')"></add-button>
    </span>
  </div>
</template>
<script>
import AddButton from './AddButton'
import MinusButton from './MinusButton'
import store from '@/store'

export default {
  components: {
    AddButton,
    MinusButton
  },
  data() {
    return {}
  },
  methods: {
    add(param) {
      this.$store.dispatch('addAction')
      this.track(param)
    },
    minus(param) {
      this.$store.dispatch('minusAction')
      this.track(param)
    },
    login() {
      this.$gtag.event('login', { method: 'Google' })
    },
    track(params) {
      console.log(params)
      this.$gtag.event(params, {
        event_category: 'btn',
        event_label: 'btn',
        value: store.getters.getCount
      })
    }
  }
}
</script>
