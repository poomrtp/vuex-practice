<template>
  <div>
    <h1>{{ $store.getters.getCount }}</h1>
    <span>
      <minus-button @click="minus"></minus-button>
    </span>
    <span>
      <add-button @click="add"></add-button>
    </span>
  </div>
</template>
<script>
import AddButton from './AddButton'
import MinusButton from './MinusButton'

export default {
  components: {
    AddButton,
    MinusButton
  },
  data() {
    return {}
  },
  methods: {
    add() {
      this.$store.dispatch('addAction')
      this.track()
    },
    minus() {
      this.$store.dispatch('minusAction')
      this.track()
    },
    login() {
      this.$gtag.event('login', { method: 'Google' })
    },
    track() {
      this.$gtag.event('btn tracker', {
        event_category: 'btn',
        event_label: 'btn'
      })
    }
  }
}
</script>
