<template>
  <div class="about pa-7">
    <v-card class="mx-auto mb-3" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline">About The Project</v-list-item-title>
          <v-list-item-subtitle>User CRUD made in the MENV Stack</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <img src="https://vuejs.org/images/logo.png"/>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        <v-list>
          <v-list-item>Frontend Made with Vue using Vuex, Vue Router & Vuetify</v-list-item>
          <v-list-item>Backed Made in Node using Express, MongoDB & Mongoose</v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text href="https://github.com/JuanCangelosi/user-crud-example-fe">See on Github</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline">About Me</v-list-item-title>
          <v-list-item-subtitle>Juan Ignacio Cangelosi</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey">
          <img
            src="https://avatars2.githubusercontent.com/u/14006309?s=460&u=e0bf4e14aa109ef4bd31ed627ef50630fca173b4&v=4"
          />
        </v-list-item-avatar>
      </v-list-item>
      <v-card-text>
        <v-list>
          <v-list-item>25 Years Old</v-list-item>
          <v-list-item>Living in Argentina</v-list-item>
          <v-list-item>Graduated as a Software Engineer from "Universidad Nacional del Sur"</v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn text href="https://www.linkedin.com/in/juan-ignacio-cangelosi/">See my Linkedin!</v-btn>
        <v-btn text href="https://github.com/JuanCangelosi">See my Github!</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
