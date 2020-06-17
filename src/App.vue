<template>
  <v-app id="app">
    <v-row>
      <v-col></v-col>
      <v-col :cols="6">
        <v-card class="mx-auto">
          <v-system-bar color="red darken-4" dark>
            <v-spacer></v-spacer>
            <v-icon>mdi-window-minimize</v-icon>
            <v-icon>mdi-window-maximize</v-icon>
            <v-icon>mdi-close</v-icon>
          </v-system-bar>

          <v-app-bar dark color="red darken-2">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>My Recipes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-app-bar>

          <v-container>
            <router-view />
          </v-container>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-btn @click="logout">Logout</v-btn>
    <v-btn @click="CreateRecipe">Create Recipe</v-btn>
  </v-app>
</template>

<script lang="ts">
import firebase from "firebase";
import Vue from "vue";

export default Vue.extend({
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
    CreateRecipe() {
      this.$router.push({ name: "RecipeAdd" });
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
