<template>
  <v-btn @click="handleClick" depressed my-6>
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'BaseButton',
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
