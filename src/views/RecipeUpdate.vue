<template>
  <div>
    <RecipeUpdate :recipeId="recipeId"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeUpdate from "@/components/recipe/RecipeUpdate.vue";

export default Vue.extend({
  props: {
    recipeId: {
      required: true
    }
  },
  components: {
    RecipeUpdate
  }
});
</script>

<style scoped></style>
