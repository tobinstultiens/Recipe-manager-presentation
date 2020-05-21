<template>
	<div class="home">
		<RecipeHome />
		<v-btn @click="logout">Logout</v-btn>
	</div>
</template>

<script lang="ts">
import firebase from "firebase";
import RecipeHome from "@/components/recipe/RecipeHome.vue";

export default {
	name: "Home",
	components: {
		RecipeHome
	},
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
		}
	}
};
</script>
