<template>
  <div>
    <!-- <component :is="listComponents"></component> -->
    <v-row justify="end">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col class="text-right">
        <v-btn mx="12" depressed>
          <router-link to="/create-product" tag="span">
            {{ 'Add Product' }}
          </router-link>
        </v-btn>
      </v-col>
    </v-row>
    <div style="margin-top: 6px">
      <product-list></product-list>
    </div>
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
    this.fetchData()
  },
  created() {
    this.track()
  },
  methods: {
    listComponents() {},
    fetchData() {
      this.$store.dispatch('fetchProduct')
    },
    addProduct() {
      // this.$store.dispatch('fetchProduct')
      console.log('add')
    },
    track () {
      // this.$gtag.screenview({
      //   app_name: 'Test GA App',
      //   screen_name: 'List',
      // })
      // this.$gtag.pageview(this.$route)
    }
  }
}
</script>

<style></style>
