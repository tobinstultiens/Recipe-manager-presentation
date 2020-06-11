import http from "../httpcommon";
import { Recipe } from "@/models/Recipe.ts";
import { RecipeList } from "@/models/RecipeList.ts";

/**
	* This is the recipe service
*/
export default class RecipeService {
	// Retrieve all recipes with this pagination.
	getAll(Page: number, Size: number) {
		return http.get<RecipeList[]>("/recipe", {
			params: {
				Page: Page,
				Size: Size
			}
		});
	}
	// Retrieve this specific recipe
	get(id: string) {
		return http.get<Recipe>("/recipe/" + id);
	}
	// Create this recipe
	post(recipe: Recipe) {
		return http.post<Recipe>("/recipe", recipe);
	}
	// Update this recipe
	put(recipe: Recipe) {
		return http.put<Recipe>("/recipe", recipe);
	}
	// Delete this recipe
	delete(id: string) {
		return http.delete<Recipe>("/recipe/" + id);
	}
}
