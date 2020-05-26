<template>
	<div>
	<RecipeCreation />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeCreation from "@/components/recipe/RecipeCreation.vue";

export default Vue.extend({
	name: "RecipeAdd",
	components: {
		RecipeCreation
	}
});
</script>

<style scoped></style>
