export interface Ingredient {
	id?: string;
	measurement: number;
	measurementType: string;
	ingredientDescription: string;
	recipeId?: string;
}

export interface Direction {
	id?: string;
	index: number;
	description: string;
	recipeId?: string;
}

export interface RecipeTime {
	id?: string;
	prepTime: string;
	cookTime: string;
	totalTime: string;
	recipeId?: string;
}

export interface Recipe {
	id?: string;
	title: string;
	description: string;
	ingredients: Ingredient[];
	directions: Direction[];
	recipeTime?: RecipeTime;
	imgLink?: string;
	videoLink?: string;
	creationDateTime?: Date;
	lastUpdatedDateTime?: Date;
	userId?: string;
}
