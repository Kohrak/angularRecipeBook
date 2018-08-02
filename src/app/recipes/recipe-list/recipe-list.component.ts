import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First recipe', 'this is a test', 'https://www.curiouscuisiniere.com/wp-content/uploads/2017/02/Venezuelan-Arepas-1054.21.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe){
    console.log("on select recipe")
    this.recipeSelected.emit(recipe)
  }

}
