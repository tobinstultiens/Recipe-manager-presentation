import http from "../httpcommon";
import { Recipe } from "@/models/Recipe.ts";
import { RecipeList } from "@/models/RecipeList.ts";

export class RecipeService {
	getAll(): RecipeList[] {
		http.get("/recipe").then(response => {
			return response;
		});
	}
	get(id: string): Recipe {
		http.get("/recipe/" + id).then(response => {
			return response;
		});
	}
	post(recipe: Recipe): void {
		http.post("/recipe/", {
			body: recipe
		})
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
	}
	put(recipe: Recipe): void {
		http.put("/recipe/", {
			body: recipe
		})
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
	}
}
