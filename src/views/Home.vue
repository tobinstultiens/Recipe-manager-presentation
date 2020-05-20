<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  methods: {
    logout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function() {
  // An error happened.
});
    }
  }
};
</script>
