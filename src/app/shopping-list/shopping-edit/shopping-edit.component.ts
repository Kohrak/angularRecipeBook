import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(nameField: HTMLInputElement, amountField: HTMLInputElement){
      let name = nameField.value
      let amount = amountField.value
      let newIngredient = new Ingredient(name, Number(amount))
      nameField.value = "";
      amountField.value = "";
      this.shoppingAdded.emit(newIngredient)
  }

}
