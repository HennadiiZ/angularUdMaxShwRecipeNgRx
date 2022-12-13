import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../_models/ingredient.model';
import { ShoppingListService } from '../_services/shopping-list.service';

import { Store } from '@ngrx/store';
import { State } from '../_interfaces/state.interface';
import { AppState } from '../_interfaces/app-state.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [];
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // subscriptions = new Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    // private store: Store<{ shoppingList: {ingredients: Ingredient[]} }>
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {

    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.shoppingListService.getIngredients();

    // this.subscriptions.add(
    //   this.shoppingListService.ingredientsChanged.subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   )
    // )
  }

  onEditItem(index: number):void {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy():void {
    // this.subscriptions.unsubscribe();
  }

}
