<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col></v-col>
      <v-col cols="6" sm="8">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon large to="/register" v-on="on">
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Register</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form ref="login">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                v-model="form.email"
                type="text"
								required
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                v-model="form.password"
                type="password"
								required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
        <v-overlay :value="overlay">
          <i class="fa-5x fas fa-spinner fa-pulse"></i>
        </v-overlay>
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline" primary-title>Something went wrong!</v-card-title>
            <v-card-text>{{ this.dialogInfo }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">I understand</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      overlay: false,
      dialog: false,
      dialogInfo: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>
