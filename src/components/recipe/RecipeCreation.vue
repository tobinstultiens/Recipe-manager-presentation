<template>
	<div>
		<v-form>
			<v-text-field
				v-model="recipe.Title"
				:counter="50"
				:rules="titleRules"
				label="Name"
				required
			></v-text-field>
			<v-text-field
				v-model="recipe.Description"
				label="Description"
				required
			></v-text-field>
			<v-btn @click="addRecipeIngredient">Add ingredient</v-btn>
			<v-row
				v-for="(ingredient, counter) in recipe.ingredients"
				v-bind:key="counter + 1"
			>
				<v-col sm="6">
					<v-text-field
						v-model="ingredient.ingredientDescription"
						label="Ingredient"
						required
					></v-text-field>
				</v-col>
				<v-col>
					<v-text-field
						v-model="ingredient.measurement"
						label="Amount of"
						required
					></v-text-field>
				</v-col>
				<v-col sm="3">
					<v-text-field
						v-model="ingredient.measurementType"
						label="Type of measurement"
						required
					></v-text-field>
				</v-col>
				<span @click="deleteRecipeIngredient(counter)">X</span>
			</v-row>
			<v-row>
				<v-col sm="4">
					<v-text-field
						v-model="recipe.recipeTime.prepTime"
						label="Preparation Time"
						required
					></v-text-field>
				</v-col>
				<v-col>
					<v-text-field
						v-model="recipe.recipeTime.cookTime"
						label="Cooking Time"
						required
					></v-text-field>
				</v-col>
				<v-col>
					<v-text-field
						v-model="recipe.recipeTime.totalTime"
						label="Total time needed"
						required
					></v-text-field>
				</v-col>
			</v-row>
			<v-btn @click="addRecipeDirections">Add direction</v-btn>
			<v-row
				v-for="(direction, counter) in recipe.directions"
				v-bind:key="counter + 1"
			>
				<v-col sm="1">
					<span>{{ counter + 1 }}</span>
				</v-col>
				<v-col>
					<v-text-field
						v-model="direction.description"
						label="Directions description"
						required
					></v-text-field>
				</v-col>
				<v-col sm="1">
					<span @click="deleteRecipeDirections(counter)">X</span>
				</v-col>
			</v-row>
			<v-text-field
				v-model="recipe.ImgLink"
				label="Image Link"
				required
			></v-text-field>
			<v-text-field
				v-model="recipe.VideoLink"
				label="Video Link"
				required
			></v-text-field>

			<v-btn @click="createRecipe" class="mr-4">
				Create
			</v-btn>
		</v-form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Recipe from "@/models/Recipe.ts";
import RecipeService from "@/services/recipes/recipeService.ts";
const recipeService = new RecipeService();

export default Vue.extend({
	name: "RecipeCreation",
	data() {
		return {
			recipe: Recipe,
			titleRules: [
				(v: string) => !!v || "Name is required",
				(v: string) =>
					(v && v.length <= 50) || "Name must be less than 10 characters"
			]
		};
	},
	methods: {
		addRecipeDirections() {
			this.recipe.directions.push({
				index: this.recipe.directions.length + 1
			});
		},
		addRecipeIngredient() {
			this.recipe.ingredients.push({});
		},
		deleteRecipeDirections(counter) {
			if (counter + 1 === this.recipe.directions.length) {
				this.recipe.directions.splice(counter, 1);
			}
		},
		deleteRecipeIngredient(counter) {
			this.recipe.ingredients.splice(counter, 1);
		},
		async createRecipe() {
			await recipeService
				.post(this.recipe)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		this.recipe = {
			directions: [
				{
					index: 1
				}
			],
			ingredients: [{}],
			recipeTime: {}
		};
	}
});
</script>

<style scoped></style>
