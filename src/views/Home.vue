<template>
	<div class="home">
				<RecipeHome />
	</div>
</template>

<script lang="ts">
import RecipeHome from "@/components/recipe/RecipeHome.vue";
import Vue from "vue";

export default Vue.extend({
	name: "Home",
	components: {
		RecipeHome
	},
});
</script>
