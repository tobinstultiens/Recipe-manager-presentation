<template>
	<v-card class="mx-auto">
		<v-system-bar color="pink darken-2" dark>
			<v-spacer></v-spacer>
			<v-icon>mdi-window-minimize</v-icon>
			<v-icon>mdi-window-maximize</v-icon>
			<v-icon>mdi-close</v-icon>
		</v-system-bar>

		<v-app-bar dark color="pink">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-toolbar-title>My Recipes</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
		</v-app-bar>

		<v-container>
			<v-row dense>
				<v-col v-for="(item, i) in items" :key="i" cols="12">
					<v-card dark>
						<div class="d-flex flex-no-wrap justify-space-between">
							<div>
								<v-card-title
									class="headline"
									v-text="item.title"
								></v-card-title>
								<v-card-subtitle v-text="item.description"></v-card-subtitle>
							</div>

							<v-avatar class="ma-3" size="125" tile>
								<v-img :src="item.imgLink"></v-img>
							</v-avatar>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>
<script lang="ts">
import Vue from "vue";
import RecipeService from "@/services/recipes/recipeService.ts";
import { RecipeList } from "@/models/RecipeList.ts";
const recipeService = new RecipeService();

export default Vue.extend({
	data() {
		return {
			// Recipe List for the visual display
			items: Array<RecipeList>()
		};
	},
	async mounted() {
		// Await the retrieval of all recipes.
		await recipeService
			.getAll(1, 25)
			.then(response => {
				this.items = response.data;
			})
			.catch(error => {
				console.log(error);
			});
	}
});
</script>

<style scoped></style>
