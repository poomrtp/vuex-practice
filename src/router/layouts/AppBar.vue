<template>
  <div>
    <v-navigation-drawer v-model="sidebar" app class="hidden-lg-and-up">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path" @click="track()">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'AppBar',
  data() {
    return {
      appTitle: 'Test GA App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Product List', path: '/product-list', icon: 'mdi-format-list-bulleted' },
        { title: 'Test GA', path: '/test-ga', icon: 'mdi-test-tube' },
        { title: 'Test Vuex', path: '/test-vuex', icon: 'mdi-test-tube' }
      ]
    }
  },
  methods: {
    track() {
      // this.$gtag.event('nav-bar-click', {
      //   event_category: `${this.menuItems.title}`,
      //   event_label: this.menuItems.title,
      //   value: 1
      // })
      // this.$gtag.pageview(this.$route)
    }
  }
}
</script>
