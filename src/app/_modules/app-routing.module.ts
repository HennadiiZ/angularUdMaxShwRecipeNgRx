import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthComponent } from '../auth/auth/auth.component';
// import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
// import { AuthGuard } from '../auth/auth.guard';
// import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
// import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
// import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
// import { RecipesComponent } from '../recipes/recipes.component';
// import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
// import { RecipesResolverService } from '../_services/recipes-resolver.service';

const routes: Routes = [
  // { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},

  // {
  //   path: 'recipes',
  //   loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesModule)
  //   // loadChildren: '../recipes/recipes.module#RecipesModule'
  // },
  // {
  //   path: 'shopping-list',
  //   loadChildren: () => import('../shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../auth/auth-routing.module').then(m => m.AuthRoutingModule)
  // }

  // { path: 'recipes', component: RecipesComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: 'new', component: RecipeEditComponent },
  //     { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
  //     { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
  //   ]
  // },
  // { path: 'shopping-list', component: ShoppingListComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
