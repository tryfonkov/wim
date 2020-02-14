<template>
  <v-app>
    <snackbar></snackbar>

    <app-drawer :items="drawerItems"></app-drawer>

    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import AppDrawer from '@/components/AppDrawer.vue'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: { AppDrawer },
})
export default class App extends Vue {
  public drawerItems: object[] = []
}
</script>
