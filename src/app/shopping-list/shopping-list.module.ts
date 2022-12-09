import { NgModule } from "@angular/core";
import { ShoppingListRoutingModule } from "../recipes/shopping-list-routing.module";
import { SharedModule } from "../_modules/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    SharedModule,
    ShoppingListRoutingModule
  ]
})

export class ShoppingListModule {}
