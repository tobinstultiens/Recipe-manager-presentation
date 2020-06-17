<template>
  <div>
    <v-img v-if="recipe.imgLink" :src="recipe.imgLink"></v-img>
	<v-btn v-if="recipe.videoLink" :src="recipe.videoLink">Video</v-btn>
    <v-text-field v-model="recipe.title" label="Title" outlined readonly></v-text-field>
    <v-text-field v-model="recipe.description" label="Description" outlined readonly></v-text-field>
    <v-row v-for="(ingredient, i) in recipe.ingredients" :key="i">
      <v-col sm="8">
        <v-text-field
          v-model="ingredient.ingredientDescription"
          label="Ingredient Description"
          outlined
          readonly
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="ingredient.measurement" label="Amount" outlined readonly></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="ingredient.measurementType" label="Unit" outlined readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4">
        <v-text-field
          v-model="recipe.recipeTime.prepTime"
          label="Preparation Time"
          outlined
          readonly
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="recipe.recipeTime.cookTime" label="Cooking Time" outlined readonly></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="recipe.recipeTime.totalTime"
          label="Total time needed"
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row v-for="(direction, counter) in recipe.directions" :key="'test' +counter + 1">
      <v-col sm="1">
        <span>{{ counter + 1 }}</span>
      </v-col>
      <v-col>
        <v-text-field
          v-model="direction.description"
          label="Directions description"
          outlined
          readonly
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Recipe } from "@/models/Recipe.ts";
import RecipeService from "@/services/recipes/recipeService.ts";
const recipeService = new RecipeService();

@Component({
  data() {
    return {
      dialog: false,
      alert: false,
      recipe: {} as Recipe
    };
  },
  methods: {
    getRecipeInfo() {
      recipeService.get(this.$props.recipeId).then(response => {
        this.$data.recipe = response.data;
      });
    }
  },
  mounted() {
    recipeService.get(this.$props.recipeId).then(response => {
      this.$data.recipe = response.data;
    });
  }
})
export default class RecipeGet extends Vue {
  @Prop() private recipeId!: string;
}
</script>

<style scoped></style>
