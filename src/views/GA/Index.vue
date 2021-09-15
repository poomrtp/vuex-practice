<template>
  <div>
    <h1>TEST GA</h1>
    <h1>pageview and screenview</h1>
  </div>
</template>
<script>


export default {
  components: {
  },
  data() {
    return {
      trackBtn: []
    }
  },
  created() {
    this.track()
  },
  methods: {
    track() {
      this.$gtag.screenview({
        app_name: 'Test GA App',
        screen_name: 'Test GA Page',
      })
      this.$gtag.pageview(this.$route)
    }
  }
}
</script>