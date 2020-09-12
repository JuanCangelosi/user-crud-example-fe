<template>
  <div>
    <v-data-table :headers='headers' :items='users' :items-per-page='5' class='elevation-1'>
      <template v-slot:top>
        <v-toolbar flat color='white'>
          <v-toolbar-title>User CRUD</v-toolbar-title>
          <v-divider class='mx-4' inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model='dialog' max-width='500px'>
            <template v-slot:activator='{ on, attrs }'>
              <v-btn color='primary' dark class='mb-2' v-bind='attrs' v-on='on'>New Item</v-btn>
            </template>
            <UserFormCard />
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action='{ item }'>
        <v-icon small class='mr-2' @click='editItem(item)'>mdi-pencil</v-icon>
        <v-icon small @click='deleteItem(item)'>mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color='primary' @click='initialize'>Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import UserFormCard from '@/components/UserFormCard';

export default {
  components: {
    UserFormCard,
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: '_id',
        },
        { text: 'Username', value: 'userName' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      users: [
        {
          _id: '1',
          userName: 'Juan',
          lastName: 'Cangelosi',
          email: 'juan@test.com',
        },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.users.indexOf(item);
      confirm('Are you sure you want to delete this item?') &&
        this.users.splice(index, 1);
    },
  },
};
</script>

<style></style>
