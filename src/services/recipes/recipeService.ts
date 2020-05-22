import http from "../httpcommon";
import { Recipe } from "@/models/Recipe.ts";
import { RecipeList } from "@/models/RecipeList.ts";

export default class RecipeService {
	getAll(Page: number, Size: number) {
		return http.get<RecipeList>("/recipe", {
			params: {
				Page: Page,
				Size: Size
			}
		});
	}
	get(id: string) {
		return http.get<Recipe>("/recipe/" + id);
	}
	post(recipe: Recipe) {
		return http.post("/recipe/", {
			body: recipe
		});
	}
	put(recipe: Recipe) {
		return http.put("/recipe/", {
			body: recipe
		});
	}
	delete(id: string) {
		return http.delete<Recipe>("/recipe/" + id);
	}
}
