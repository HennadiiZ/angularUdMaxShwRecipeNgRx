import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent, children: []}
  // { path: '', component: ShoppingListComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {}
