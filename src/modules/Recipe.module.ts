import { Module, MutationTree, ActionTree } from 'vuex';
import {Recipe } from "@/models/Recipe"

interface Menu {
    recipes: Recipe[];
}  

export interface IMenuState {
  menu: Menu;
}

export interface IMenuMutations extends MutationTree<IMenuState> {
  addRecipe(state: IMenuState, recipe: Recipe): any;
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
    return { menu: { recipes: [] } };
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
