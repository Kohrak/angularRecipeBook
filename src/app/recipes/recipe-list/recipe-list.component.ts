import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes()
  }

  onSelectRecipe(recipe: Recipe){
    console.log("on select recipe")
    this.recipeSelected.emit(recipe)
  }

}
