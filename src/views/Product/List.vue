<template>
  <div>
    <!-- <component :is="listComponents"></component> -->
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
// import store from '@/store'
export default {
  components: {
    ProductList
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    listComponents() {},
    fetchData() {
      this.$store.dispatch('fetchProduct')
    }
  }
}
</script>

<style></style>
