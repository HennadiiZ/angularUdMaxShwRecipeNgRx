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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RecipesModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
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
