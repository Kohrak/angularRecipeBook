import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe', 'this is a test', 'https://www.curiouscuisiniere.com/wp-content/uploads/2017/02/Venezuelan-Arepas-1054.21.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
