<template>
  <div>
    <h1>{{ $store.getters.getCount }}</h1>
    <span>
      <base-button @click="minus()">{{ '-' }}</base-button>
    </span>
    <span>
      <base-button @click="add()">{{ '+' }}</base-button>
    </span>
  </div>
</template>
<script>
import BaseButton from './BaseButton'
import store from '@/store'

export default {
  components: {
    BaseButton
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
      this.$gtag.screenview({
        app_name: 'Test GA App',
        screen_name: 'Vuex Page',
      })
      this.$gtag.pageview(this.$route)
    }
  }
}
</script>
