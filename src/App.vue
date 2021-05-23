<template>
  <v-app>
    <component :is="layout"></component>
    <router-view></router-view>
  </v-app>
</template>

<script>
// import Counter from '@/components/Counter'

export default {
  name: 'App',
  components: {
    // Counter
  },
  data: () => ({
    //
  }),
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  },
  methods: {
    login() {
      this.$gtag.event('login', { method: 'Google' })
    },
    track() {
      this.$gtag.event('event', 'aaa', {
        event_category: 'bbb',
        event_label: 'ccc'
      })
    }
  }
}
</script>
<style>
#app {
  font-family: 'Sarabun';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
