<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
      :loading="loading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            placeholder="Search User"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" @click="addItem">New Item</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>

      <template v-if="users.length === 0" v-slot:no-data>No users yet</template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    users: Array,
    loading: Boolean,
  },
  data() {
    return {
      search: "",
      headers: [
        /* Commented as it doesn't add much to the example    
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "_id",
        }, */
        { text: "Username", value: "userName" },
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Actions", value: "action", sortable: false },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.$emit("editUser", item);
    },

    deleteItem(item) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.$emit("removeUser", item);
      }
    },

    addItem() {
      this.$emit("createUser");
    },
  },
};
</script>

<style></style>
