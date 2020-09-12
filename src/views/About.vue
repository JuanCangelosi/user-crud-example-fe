<template>
  <div class="about pa-5">
    <v-card class="mx-auto mb-3" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline">About The Project</v-list-item-title>
          <v-list-item-subtitle>User CRUD made in the MENV Stack</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        <v-list>
          <v-list-item>Frontend Made with Vue using Vuex, Vue Router & Vuetify</v-list-item>
          <v-list-item>Backed Made in Node using Express, MongoDB & Mongoose</v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text>See on Github</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline">About Me</v-list-item-title>
          <v-list-item-subtitle>Juan Ignacio Cangelosi</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        <v-list>
          <v-list-item>25 Years Old</v-list-item>
          <v-list-item>Living in Argentina</v-list-item>
          <v-list-item>Graduated as a Software Engineer from "Universidad Nacional del Sur"</v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text>See my Linkedin!</v-btn>
        <v-btn text>See my Github!</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
