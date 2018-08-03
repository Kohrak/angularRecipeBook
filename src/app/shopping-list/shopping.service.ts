import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potato', 1)
  ]
  
  constructor() { }

  onAdd(name: string, amount: number){
    let newIngredient = new Ingredient(name, Number(amount))
    this.ingredients.push(newIngredient)
    this.ingredientsChanged.emit(this.getIngredients());
}

  getIngredients(){
    return this.ingredients.slice();
  }
}
