// import { HttpClientModule } from "@angular/common/http";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { BrowserModule } from "@angular/platform-browser";
// import { RouterModule } from "@angular/router";
// import { AppRoutingModule } from "../_modules/app-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "../_modules/shared.module";

import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    // RouterModule,
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    SharedModule,
    RecipesRoutingModule
  ],
  // exports: [
  //   RecipesComponent,
  //   RecipeListComponent,
  //   RecipeDetailComponent,
  //   RecipeItemComponent,
  //   RecipeStartComponent,
  //   RecipeEditComponent,
  //   RecipesRoutingModule
  // ]
})

export class RecipesModule {}
