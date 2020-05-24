<template>
	<div class="home">
		<v-row>
			<v-col> </v-col>
			<v-col :cols="6">
				<RecipeHome />
			</v-col>
			<v-col> </v-col>
		</v-row>
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
