/* eslint-disable */
import RecipeService from "@/services/recipes/recipeService";
import { Recipe } from "@/models/Recipe"
import { RecipeList } from "@/models/RecipeList"
import { Module, MutationTree, ActionTree } from 'vuex';
import { RootState } from '@/state/RootState';
const recipeService = new RecipeService();

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
            });
    },
    setRecipeList({ commit }, payload): any {
        recipeService
            .getAll(payload.page, payload.size, payload.token)
            .then(response => {
                commit('setRecipeList', response.data);
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