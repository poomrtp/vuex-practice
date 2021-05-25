<template>
  <v-container>
    <v-card class="mt-24">
      <v-row class="mt-24">
        <v-col>
          <v-text-field label="Product Name" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Price" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-24">
        <v-col>
          <v-text-field label="Quantity" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
        <v-col>
          <v-select :items="items" label="Select Status"></v-select>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({})
}
</script>
