import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../_models/ingredient.model';
import { ShoppingListService } from '../_services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Pears', 3)
  // ];

  ingredients: Ingredient[] = [];
  subscriptions = new Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscriptions.add(
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
    )
  }

  // onAddIngredients(ingredient: Ingredient): void {
  //   // this.ingredients.push(ingredient);
  //   // this.ingredients.push(this.shoppingListService);
  // }

  onEditItem(index: number):void {
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe();
  }

}
