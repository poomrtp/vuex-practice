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
      trackBtn: []
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addAction')
      this.trackBtn = {
        event: 'add-button',
        event_category: 'click',
        event_label: 'add-button'
      }
      this.track()
    },
    minus() {
      this.$store.dispatch('minusAction')
      this.trackBtn = {
        event: 'minus-button',
        event_category: 'click',
        event_label: 'minus-button'
      }
      this.track()
    },
    login() {
      this.$gtag.event('login', { method: 'Google' })
    },
    track() {
      this.$gtag.event(this.trackBtn.event, {
        event_category: this.trackBtn.event_category,
        event_label: this.trackBtn.event_label,
        value: store.getters.getCount
      })
    }
  }
}
</script>
