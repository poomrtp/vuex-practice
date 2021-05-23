<template>
  <div>
    <h1>{{ $store.getters.getCount }}</h1>
    <span>
      <minus-button @click="minus()"></minus-button>
    </span>
    <span>
      <add-button @click="add()"></add-button>
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
    return {
      trackBtn: null
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addAction')
      this.trackBtn = 'add-button'
      this.track()
    },
    minus() {
      this.$store.dispatch('minusAction')
      this.trackBtn = 'minus-button'
      this.track()
    },
    login() {
      this.$gtag.event('login', { method: 'Google' })
    },
    track() {
      console.log(this.trackBtn)
      this.$gtag.event(this.trackBtn, {
        event_category: 'btn',
        event_label: 'btn',
        value: store.getters.getCount
      })
    }
  }
}
</script>
