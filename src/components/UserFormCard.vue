<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" v-if="user._id == null">
            <v-text-field v-model="user.userName" label="Username"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field v-model="user.firstName" label="First Name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field v-model="user.lastName" label="Last Name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" v-if="user._id == null">
            <v-text-field v-model="user.email" label="Email"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    user: Object
  },
  data() {
    return {
      formTitle: "Add User",
    };
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    save() {
      if (this.user._id) {
        this.$emit('editUser', this.user);
      } else {
        this.$emit('saveUser', this.user);
      }
    },
  },
};
</script>

<style>
</style>
