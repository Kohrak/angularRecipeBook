import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe', 
    'this is a test', 
    'https://www.curiouscuisiniere.com/wp-content/uploads/2017/02/Venezuelan-Arepas-1054.21.jpg',
  [
    new Ingredient('Harina Pan', 1), 
    new Ingredient('salt', 1)
  ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
