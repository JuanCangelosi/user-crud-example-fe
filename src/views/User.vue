<template>
  <div>
    <UserList
      :users="users"
      :loading="isStatus('getUsers','pending')"
      @removeUser="removeUser"
      @editUser="openDialog"
      @createUser="openDialog"
    />
    <v-dialog v-model="dialog" max-width="500px">
      <UserFormCard :user="user" @saveUser="saveUser" @editUser="editUser"  @cancel="closeDialog"/>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import UserList from "@/components/UserList";
import UserFormCard from "@/components/UserFormCard";

export default {
  components: { UserList, UserFormCard },
  data() {
    return {
      dialog: false,
      user: {},
    };
  },
  computed: {
    ...mapState("user", ["users"]),
    ...mapGetters("user", ["isStatus"])
  },
  methods: {
    ...mapActions("user", ["getUsers", "postUser", "putUser", "deleteUser"]),
    saveUser(user) {
      this.postUser({user});
      this.closeDialog();
    },
    editUser(user) {
      this.putUser({user});
      this.closeDialog();
    },
    removeUser(user) {
      this.deleteUser({user});
    },
    openDialog(user) {
      if (user) {
        this.user = user;
      }
      this.dialog = true;
    },
    closeDialog() {
      this.user = {};
      this.dialog = false;
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style>
</style>
