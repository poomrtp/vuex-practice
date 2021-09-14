<template>
  <div id="gr-create">
    <head-content label="Add Product">
      <div slot="right">
        <v-btn class="mr-4" color="light darken-4" min-width="150" outlined>
          <span class="subtitle-1 font-weight-bold">
            Undo
          </span>
        </v-btn>
        <v-btn class="ml-4" color="light darken-4" min-width="150" depressed>
          <span class="subtitle-1 font-weight-bold white--text">
            Add
          </span>
        </v-btn>
      </div>
    </head-content>
    <v-card style="margin-top: 24px; padding: 6px" class="mt-12">
      <div class="mt-4">
        <v-row>
          <v-col class="my-12">
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
            <!-- <v-select :items="items" label="Standard"></v-select> -->
            <v-select
              :items="productStatus"
              item-text="state"
              item-value="state"
              label="Select Status"
            ></v-select>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
import HeadContent from '@/components/HeadContent'
export default {
  components: {
    HeadContent
  },
  data() {
    return {
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters'
      ],
      productStatus: [
        {
          state: 'On sale'
        },
        {
          state: 'Coming soon'
        }
      ]
    }
  },
  methods: {
    track () {
      this.$gtag.screenview({
        app_name: 'Test GA App',
        screen_name: 'Create',
      })
      this.$gtag.pageview(this.$route)
    }
  }
}
</script>
