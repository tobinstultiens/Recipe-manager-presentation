<template>
	<div id="app">
		<v-row>
			<v-col> </v-col>
			<v-col :cols="6">
				<router-view />
			</v-col>
			<v-col> </v-col>
		</v-row>
		<v-btn @click="logout">Logout</v-btn>
		<v-btn @click="CreateRecipe">Create Recipe</v-btn>
	</div>
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
				.then(
					function() {
						// Sign-out successful.
					},
					function() {
						// An error happened.
					}
				);
		},
		CreateRecipe() {
			this.$router.replace({ name: "RecipeAdd" });
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
