<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        @keyup="searchProduct"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="$store.getters.getProductHeader"
      :items="$store.getters.getProduct"
    ></v-data-table>
  </v-card>
</template>
<script>
// import store from '@/store'
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchProduct() {
      console.log(this.search)
    }
  }
}
</script>
