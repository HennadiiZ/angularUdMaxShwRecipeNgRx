import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

import { NgModule } from '@angular/core';
import { SharedModule } from './_modules/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AlertComponent } from './shared/alert/alert.component';

import { AuthInterceptorService } from './_services/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { shoppingListReducer } from './shopping-list/store/shopping-list.reduser';
// import { authReducer } from './auth/store/auth.reducer';
// import { CoreModule } from './core.module';
import * as fromApp from './store/app.reducer';
import { AuthEffects } from './auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,

    // StoreModule.forRoot({
    //   shoppingList: shoppingListReducer,
    //   auth: authReducer
    // })
    StoreModule.forRoot(fromApp.appReducer),
    // EffectsModule.forRoot([AuthEffects])
    // CoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule {}

//------------- NgRx -------------------

// 354. What is Application State?
// 355. What is NgRx?
// 356. Getting Started with Reducers
    // npm i --save @ngrx/store
    // npm install @ngrx/store --save
    // npm install --legacy-peer-deps

    // npm install @ngrx/store --save --force // this worked out
// 357. Adding Logic to the Reducer

// 358. Understanding & Adding Actions

// 359. Setting Up the NgRx Store
// 360. Selecting State

// 361. Dispatching Actions

// 362. Multiple Actions

// 363. Preparing Update & Delete Actions

// 364. Updating & Deleting Ingredients

// 365. Expanding the State

// 366. Managing More State via NgRx

// 367. Removing Redundant Component State Management

// 368. First Summary & Clean Up

// 369. One Root State

// 370. Setting Up Auth Reducer & Actions

// 371. Dispatching Auth Actions

// 372. Auth Finished (For Now...)

// 373. And Important Note on Actions

// 374. Exploring NgRx Effects
   // npm install --save @ngrx/effects

// 375. Defining the First Effect
// 376. Effects & Error Handling
// 377. Login via NgRx Effects
