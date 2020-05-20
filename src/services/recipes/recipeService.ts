import http from "../httpcommon";
import { Recipe } from "@/models/Recipe.ts";
import { RecipeList } from "@/models/RecipeList.ts";

export class RecipeService {
	getAll(): RecipeList[] | null {
		http.get<RecipeList>("/recipe")
			.then(response => {
				return response;
			})
			.catch(error => {
				console.log(error);
			});
		return null;
	}
	get(id: string): Recipe | null {
		http.get<Recipe>("/recipe/" + id)
			.then(response => {
				return response;
			})
			.catch(error => {
				console.log(error);
			});
		return null;
	}
	post(recipe: Recipe): boolean {
		http.post("/recipe/", {
			body: recipe
		})
			.then(response => {
				return true;
			})
			.catch(error => {
				console.log(error);
			});
		return false;
	}
	put(recipe: Recipe): boolean {
		http.put("/recipe/", {
			body: recipe
		})
			.then(response => {
				return true;
			})
			.catch(error => {
				console.log(error);
			});
		return false;
	}
}
