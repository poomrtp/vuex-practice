<template>
  <v-toolbar class="mb-12" :flat="flat">
    <v-toolbar-title>
      <!-- <router-link v-if="backLink" :to="backLink">
        <v-icon class="mt-n1 mr-3" color="primary">
          mdi-arrow-left
        </v-icon>
        <span class="font-weight-bold primary--text">
          {{ label }}
        </span>
      </router-link> -->
      <div class="font-weight-bold primary--text">
        {{ label }}
      </div>
    </v-toolbar-title>

    <v-spacer v-if="hasSlot('right')"></v-spacer>

    <slot name="right"></slot>

    <template v-if="hasSlot('extension')" #extension>
      <slot name="extension"></slot>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HeadContent',
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    backLink: {
      type: Object,
      default: null
    },
    extensionHeight: {
      type: String,
      default: '48'
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  computed: {
    isShowSlotLeft() {
      return !this.label && this.hasSlot('left')
    }
  },
  methods: {
    hasSlot(name) {
      return !!this.$slots[name]
    }
  }
}
</script>
