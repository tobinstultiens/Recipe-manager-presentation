<template>
  <div>
    <v-alert type="error" v-model="alert" dismissable>Creation of recipe has failed.</v-alert>
    <v-form>
      <v-text-field v-model="recipe.title" :counter="50" :rules="titleRules" label="Name" required></v-text-field>
      <v-text-field v-model="recipe.description" label="Description" required></v-text-field>
      <v-btn @click="addRecipeIngredient">Add ingredient</v-btn>
      <v-row v-for="(ingredient, i) in recipe.ingredients" :key="'ingredient' + i + 1">
        <v-col sm="6">
          <v-text-field v-model="ingredient.ingredientDescription" label="Ingredient" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model.number="ingredient.measurement"
            label="Amount of"
            type="number"
            required
          ></v-text-field>
        </v-col>
        <v-col sm="3">
          <v-text-field v-model="ingredient.measurementType" label="Type of measurement" required></v-text-field>
        </v-col>
        <span @click="deleteRecipeIngredient(i)">X</span>
      </v-row>
      <v-row>
        <v-col sm="4">
          <v-text-field v-model="recipe.recipeTime.prepTime" label="Preparation Time" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="recipe.recipeTime.cookTime" label="Cooking Time" required></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="recipe.recipeTime.totalTime" label="Total time needed" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="addRecipeDirections">Add direction</v-btn>
      <v-row v-for="(direction, counter) in recipe.directions" :key="counter + 1">
        <v-col sm="1">
          <span>{{ counter + 1 }}</span>
        </v-col>
        <v-col>
          <v-text-field v-model="direction.description" label="Directions description" required></v-text-field>
        </v-col>
        <v-col sm="1">
          <span @click="deleteRecipeDirections(counter)">X</span>
        </v-col>
      </v-row>
      <v-text-field v-model="recipe.imgLink" label="Image Link" required></v-text-field>
      <v-text-field v-model="recipe.videoLink" label="Video Link" required></v-text-field>

      <v-btn @click="dialog = true" class="mr-4">Create</v-btn>
    </v-form>
    <div class="text-center">
      <v-dialog v-model="dialog" width="250">
        <v-card>
          <v-card-title class="headline justify-center lighten-2" primary-title>Confirmation</v-card-title>

          <v-card-text>Are you sure?</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click="createRecipe">Yes</v-btn>
            <v-btn color="primary" text @click="dialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-snackbar color="red" v-model="snackbar">
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Recipe } from "@/models/Recipe.ts";
import RecipeService from "@/services/recipes/recipeService.ts";
import * as firebase from "firebase";
const recipeService = new RecipeService();

@Component({
  data() {
    return {
      dialog: false,
      alert: false,
      snackbar: false,
      snackbarText: "",
      recipe: {} as Recipe,
      titleRules: [
        (v: string) => !!v || "Name is required",
        (v: string) =>
          (v && v.length <= 50) || "Name must be less than 10 characters"
      ]
    };
  },
  methods: {
    
  },
  mounted() {
    this.$data.recipe = {
      title: "",
      description: "",
      directions: [
        {
          index: 1,
          description: ""
        }
      ],
      ingredients: [
        {
          measurementType: "",
          measurement: 0,
          ingredientDescription: ""
        }
      ],
      recipeTime: {
        prepTime: "",
        cookTime: "",
        totalTime: ""
      }
    };
  }
})
export default class RecipeCreation extends Vue {
	addRecipeDirections() {
      this.$data.recipe.directions.push({
        index: this.$data.recipe.directions.length + 1,
        description: ""
      });
    }
    addRecipeIngredient() {
      this.$data.recipe.ingredients.push({
        measurement: 0,
        measurementType: "",
        ingredientDescription: ""
      });
    }
    deleteRecipeDirections(counter: number) {
      if (counter + 1 === this.$data.recipe.directions.length) {
        this.$data.recipe.directions.splice(counter, 1);
      } else {
        this.$data.snackbarText =
          "ERROR: There exists a direction after this one delete that one if you wish to shorten the amount of directions";
        this.$data.snackbar = true;
      }
    }
    deleteRecipeIngredient(counter: number) {
      this.$data.recipe.ingredients.splice(counter, 1);
    }
    async createRecipe() {
      this.$data.dialog = false;
      const token = await firebase.auth().currentUser?.uid;

      this.$data.recipe.userId = token;
      await recipeService
        .post(this.$data.recipe)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(() => {
          this.$data.alert = true;
          setTimeout(() => {
            this.$data.alert = false;
          }, 4000);
        });
    }
}
</script>

<style scoped></style>
