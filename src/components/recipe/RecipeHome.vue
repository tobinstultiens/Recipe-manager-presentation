<template>
  <v-row dense>
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-card dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="item.title"></v-card-title>
            <v-card-subtitle v-text="item.description"></v-card-subtitle>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img v-if="item.imgLink" :src="item.imgLink"></v-img>
          </v-avatar>
          <v-btn @click="deleteRecipe(item.id)">Delete</v-btn>
          <v-btn @click="viewRecipe(item.id)">View</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import RecipeService from "@/services/recipes/recipeService.ts";
import { RecipeList } from "@/models/RecipeList.ts";
import * as firebase from "firebase";

// Instantiate the recipe service to make use of it in multiple functions.
const recipeService = new RecipeService();

export default Vue.extend({
  data() {
    return {
      // Recipe List for the visual display
      items: Array<RecipeList>()
    };
  },
  mounted() {
    // Await the retrieval of all recipes.
    this.retrieveRecipes();
  },
  methods: {
    deleteRecipe(id: string) {
      recipeService
        .delete(id)
        .then(() => {
          this.retrieveRecipes();
        });
    },
    viewRecipe(id: string) {
      this.$router.push({ name: "Recipe", params: { recipeId: id } });
    },
    async retrieveRecipes() {
      const token = await firebase.auth().currentUser?.uid;

      recipeService
        .getAll(1, 25, token)
        .then(response => {
          this.items = response.data;
        });
    }
  }
});
</script>

<style scoped></style>
