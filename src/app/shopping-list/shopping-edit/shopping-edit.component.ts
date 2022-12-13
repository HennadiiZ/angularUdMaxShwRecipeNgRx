import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/_models/ingredient.model';
// import { ShoppingListService } from 'src/app/_services/shopping-list.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { AppState } from 'src/app/_interfaces/app-state.interface';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription = new Subscription;
  // editedItemIndex: number;
  editedItem: Ingredient;
  editMode = false;

  constructor(
    // private shoppingListService: ShoppingListService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {

      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        // this.editedItemIndex = stateData.editedIngredientIndex;

        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });

      } else {
        this.editMode = false;
      }
    });
    // this.subscription = this.shoppingListService.startedEditing.subscribe((id: number) => {
    //   console.log('id', id);
    //   this.editedItemIndex = id;
    //   this.editMode = true;
    //   this.editedItem = this.shoppingListService.getIngredient(id);

    //   // this.form.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
    // });
  }

  onSubmit(form: NgForm): void {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(
          // index: this.editedItemIndex,
          // index: 1,
          newIngredient)
        )
    } else {
      // this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onCancel():void {
    this.editMode = false;
    this.form.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete():void {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);

    // this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex))
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    this.onCancel();
  }

  ngOnDestroy():void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
    this.editMode = false;
  }
}
