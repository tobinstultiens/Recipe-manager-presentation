<template>
	<div>
		<v-form>
			<v-text-field
				v-model="name"
				:counter="10"
				:rules="nameRules"
				label="Name"
				required
			></v-text-field>

			<v-checkbox
				v-model="checkbox"
				:rules="[v => !!v || 'You must agree to continue!']"
				label="Do you agree?"
				required
			></v-checkbox>

			<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
				Validate
			</v-btn>
		</v-form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "RecipeCreation",
	data() {
		return {
			valid: true,
			name: "",
			email: "",
			nameRules: [
				(v: string) => !!v || "Name is required",
				(v: string) =>
					(v && v.length <= 10) || "Name must be less than 10 characters"
			]
		};
	}
});
</script>

<style scoped></style>
