import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router'
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent},
  { path: 'shopping-list', component: ShoppingListComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
