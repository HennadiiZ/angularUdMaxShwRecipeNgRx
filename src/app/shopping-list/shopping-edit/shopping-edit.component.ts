import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/_models/ingredient.model';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() onAdd = new EventEmitter<Ingredient>();
  @ViewChild('f') form: NgForm;
  subscription = new Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((id: number) => {
      console.log('id', id);
      this.editedItemIndex = id;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(id);

      this.form.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
    });
  }

  onSubmit(form: NgForm):void {
    // this.onAdd.emit({nameInput: this.nameInput.nativeElement.value, amountInput: this.amountInput.nativeElement.value});
    // console.log(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);

    // this.onAdd.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    // this.shoppingListService.onAdd.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));

    // this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))

    // if ( form.value.name && form.value.amount) {
    //   this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    //   form.value.name = '';
    //   form.value.amount = '';
    // }

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount));
      // this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    }
    this.editMode = false;
    form.reset();

  }

  onCancel():void {
    this.editMode = false;
    this.form.reset();
  }

  onDelete():void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onCancel();
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
    this.editMode = false;
  }
}
