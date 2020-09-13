<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to my little CRUD Demo</h1>

        <p class="subheading font-weight-regular">
          This is a really small project using the MEVN stack
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What can you do?</h2>

        <v-row justify="center">
          <span class="subheading mx-3">See the list of Users</span>
          <span class="subheading mx-3">Search for a user</span>
          <span class="subheading mx-3">Add Users</span>
          <span class="subheading mx-3">Edit Users Name & Last Name</span>
          <span class="subheading mx-3">Remove Users</span>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Notes</h2>

        <v-row justify="center">
          <p class="subheading mx-3">I only spent like 2 hours max on this, so I didn't worry much about the UI, thankfully Vuetify makes everything easy</p>
          <p class="subheading mx-3">No tests were added </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
