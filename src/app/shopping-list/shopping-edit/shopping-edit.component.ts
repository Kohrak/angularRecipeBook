import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd(nameField: HTMLInputElement, amountField: HTMLInputElement){
      let name = nameField.value
      let amount = amountField.value
      this.shoppingService.onAdd(name, Number(amount))
      nameField.value = "";
      amountField.value = "";
  }

}
