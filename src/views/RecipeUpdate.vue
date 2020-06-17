<template>
  <div>
    <RecipeUpdate />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeUpdate from "@/components/recipe/RecipeUpdate.vue";

export default Vue.extend({
  props: {
    userId: {
      required: true
    }
  },
  components: {
    RecipeUpdate
  }
});
</script>

<style scoped></style>
