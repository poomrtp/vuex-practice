<template>
  <div id="gr-create">
    <v-card class="mt-12">
      <akt-header label="Add Product">
        <div slot="right">
          <v-btn color="light-blue darken-4" min-width="150" rounded large outlined>
            <span class="subtitle-1 font-weight-bold">
              Undo
            </span>
          </v-btn>
          <v-btn class="ml-4" color="light-blue darken-4" min-width="150" rounded large depressed>
            <span class="subtitle-1 font-weight-bold white--text">
              Add
            </span>
          </v-btn>
        </div>
      </akt-header>

      <v-row>
        <v-col class="my-md-6">
          <v-text-field label="Product Name" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Price" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-12">
          <v-text-field label="Quantity" :rules="rules" hide-details="auto"></v-text-field>
        </v-col>
        <v-col>
          <v-select :items="items" label="Select Status"></v-select>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import AktHeader from '@/components/AktHeader'
export default {
  components: {
    AktHeader
  },
  data() {
    return {
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters'
      ],
      items: ['On sale', 'Coming soon']
    }
  }
}
</script>
