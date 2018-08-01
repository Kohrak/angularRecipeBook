import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First recipe', 'this is a test', 'https://www.curiouscuisiniere.com/wp-content/uploads/2017/02/Venezuelan-Arepas-1054.21.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
