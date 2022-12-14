// import { EventEmitter, Injectable, Output } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Ingredient } from '../_models/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {
//   ingredientsChanged = new Subject<Ingredient[]>();
//   startedEditing = new Subject<number>();

//   private ingredients: Ingredient[] = [];

//   constructor() {}

//   getIngredients(): Ingredient[] {
//     return this.ingredients.slice();
//   }

//   getIngredient(index: number) {
//     return this.ingredients[index];
//   }

//   addIngredient(ingredient: Ingredient): void {
//     this.ingredients.push(ingredient);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   addIngredients(ingredients: Ingredient[]): void {
//     this.ingredients.push(...ingredients);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   updateIngredient(index: number, newIngredient: Ingredient) {
//     this.ingredients[index] = newIngredient;
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   deleteIngredient(index: number) {
//     this.ingredients.splice(index, 1);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }
// }
