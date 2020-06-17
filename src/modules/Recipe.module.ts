/* eslint-disable */
import RecipeService from "@/services/recipes/recipeService";
import { Recipe } from "@/models/Recipe"
import { RecipeList } from "@/models/RecipeList"
const recipeService = new RecipeService();

// export const recipe = {
//     state: {
//         recipes: Array<Recipe>(),
//         recipeList: Array<RecipeList>()
//     },
//     mutations: {
//         addRecipe(state: any, recipe: Recipe) {
//             state.recipes.push(recipe);
//         },
//         setRecipeList(state: any, recipeList: Array<RecipeList>) {
//             state.recipeList = recipeList;
//         }
//     },
//     actions: {
//         addRecipe(context: any, recipe: Recipe): void {
//             recipeService
//                 .post(recipe)
//                 .then(() => {
//                     context.commit('addRecipe', recipe);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 });
//         },
//         setRecipeList(context: any, token: string, page: number, size: number): void {
//             recipeService
//                 .getAll(page, size, token)
//                 .then(response => {
//                     context.commit('setRecipeList', response.data);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 });
//         }
//     }
// }

import { Module, MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/state/RootState';

interface Menu {
    recipes: Recipe[];
    recipeLists: RecipeList[];
}

export interface IMenuState {
    menu: Menu;
}

export interface IMenuMutations extends MutationTree<IMenuState> {
    addRecipe(state: IMenuState, recipe: Recipe): any;
}

export const MenuActions: ActionTree<IMenuState, RootState> = {
    addRecipe({ commit }, recipe): any {
        recipeService
            .post(recipe)
            .then(() => {
                commit('addRecipe', recipe);
            })
            .catch(error => {
                console.log(error);
            });
    },
    setRecipeList({ commit }, payload): any {
        recipeService
            .getAll(payload.page, payload.size, payload.token)
            .then(response => {
                commit('setRecipeList', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export interface IMenuModule {
    namespaced?: boolean;
    state?: IMenuState;
    mutations?: IMenuMutations;
}

export default class MenuModule implements IMenuModule, Module<IMenuState, Menu> {
    public namespaced?: boolean;
    public state?: IMenuState;
    public mutations?: IMenuMutations;

    public constructor() {
        this.namespaced = true;
        this.state = this.getMenuState();
        this.mutations = this.getMutations();
    }

    private getMenuState(): IMenuState {
        return { menu: { recipes: [], recipeLists: [] } };
    }

    private getMutations(): IMenuMutations {
        const mutations: IMenuMutations = {
            addRecipe(state: IMenuState, recipe: Recipe) {
                state.menu.recipes.push(recipe);
            }
        }
        return mutations;
    }
}