import http from "../httpcommon";
import { Recipe } from "@/models/Recipe.ts";
import { RecipeList } from "@/models/RecipeList.ts";

export default class RecipeService {
	getAll(Page: number, Size: number): RecipeList[] | void {
		http
			.get<RecipeList>("/recipe", {
				params: {
					Page: Page,
					Size: Size
				}
			})
			.then(response => {
				const { data } = response;
				console.log(data);
				return data;
			})
			.catch(error => {
				console.log(error);
			});
	}
	get(id: string): Recipe | void {
		http
			.get<Recipe>("/recipe/" + id)
			.then(response => {
				return response.data;
			})
			.catch(error => {
				console.log(error);
			});
	}
	post(recipe: Recipe): boolean {
		http
			.post("/recipe/", {
				body: recipe
			})
			.then(() => {
				return true;
			})
			.catch(error => {
				console.log(error);
			});
		return false;
	}
	put(recipe: Recipe): boolean {
		http
			.put("/recipe/", {
				body: recipe
			})
			.then(() => {
				return true;
			})
			.catch(error => {
				console.log(error);
			});
		return false;
	}
	delete(id: string): boolean {
		http
			.delete<Recipe>("/recipe/" + id)
			.then(() => {
				return true;
			})
			.catch(error => {
				console.log(error);
			});
		return false;
	}
}
