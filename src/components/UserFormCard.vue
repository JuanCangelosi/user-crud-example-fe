<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <UserForm/>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserForm from '@/components/UserForm'

export default {
  components: {
    UserForm
  },
  data () {
    return {
      formTitle: 'Add User'
    }
  },
  methods: {
    close: function () {

    },
    save: function () {

    }
  }
}
</script>

<style>
</style>
