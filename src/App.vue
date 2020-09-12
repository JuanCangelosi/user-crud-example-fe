<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Juan Cangelosi Demo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/user">
        <span class="mr-2">Users</span>
      </v-btn>
      <v-btn text to="/about">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
