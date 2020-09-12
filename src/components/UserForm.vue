<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-text-field v-model="user.userName" label="Username"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <v-text-field v-model="user.firstName" label="First Name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <v-text-field v-model="user.lastName" label="Last Name"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12">
        <v-text-field v-model="user.email" label="Email"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user: {
        userName: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }

}
</script>

<style>
</style>
