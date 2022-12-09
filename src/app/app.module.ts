// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './_modules/app-routing.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { LoaderComponent } from './shared/loader/loader.component';
// import { AuthComponent } from './auth/auth/auth.component';
// import { PlaceholderDirective } from './_directives/placeholder.directive';
// import { DropdownDirective } from './_directives/dropdown.directive';

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
    HeaderComponent,

    // AuthComponent
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // LoaderComponent,
    // AlertComponent,
    // DropdownDirective,
    // PlaceholderDirective,
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,


    RecipesModule,
    ShoppingListModule,
    AuthModule,

    SharedModule,
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


// Creating a New App Correctly
// MUST READ
// In the next lecture, we set up the course project.
// Make sure, you do create that app by also adding the --no-strict flag to the ng new command - otherwise you will run into issues later on (we'll still dive into that "Strict Mode" later in the course of course, no worries)!
// We'll also install the Bootstrap CSS Framework and in this course, we use version 3 of the framework. Install it via npm install --save bootstrap@3  => The @3  is important!
// Additionally, when using a project created with Angular CLI 6+ (check via ng v ), you'll have an angular.json  file instead of an .angular-cli.json  file. In that file, you still need to add Bootstrap to the styles[]  array as shown in the next video, but the path should be node_modules/bootstrap/dist/css/bootstrap.min.css , NOT ../node_modules/bootstrap/dist/css/bootstrap.min.css . The leading ../  must not be included.
// Also see this lecture - I do show the complete setup process there: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655614/
// If you're facing any problems, please have a look at this very thorough thread by Jost: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/17862130#questions/10444944

// 48. Setting up the Application
  // npm install --save bootstrap@3

// 49. Creating the Components

// 50. Using the Components
// 51. Adding a Navigation Bar
// 52. Alternative Non-Collapsable Navigation Bar

// 53. Creating a "Recipe" Model

// 54. Adding Content to the Recipes Components
// 54. My solution

// 55. Outputting a List of Recipes with ngFor
// 56. Displaying Recipe Details

// 57. Working on the ShoppingListComponent
// 58. Creating an "Ingredient" Model (shortcut)

// 59. Creating and Outputting the Shopping List
// 60. Adding a Shopping List Edit Section
// 61. Wrap Up & Next Steps

// 85. Introduction
// 86. Adding Navigation with Event Binding and ngIf

// 87. Passing Recipe Data with Property Binding

// 88. Passing Data with Event and Property Binding (Combined)
// 90. Allowing the User to Add Ingredients to the Shopping List


// 103. Building and Using a Dropdown Directive

// 104. Closing the Dropdown From Anywhere

// SERVICES
// 117. Setting up the Services
// 118. Managing Recipes in a Recipe Service
// 118. Managing Recipes in a Recipe Service (2)
// 118. Managing Recipes in a Recipe Service (3)
// 118. Managing Recipes in a Recipe Service (4)

// 119. Using a Service for Cross-Component Communication

// 120. Adding the Shopping List Service
// 121. Using Services for Pushing Data from A to B

// 122. Adding Ingredients to Recipes

// 123. Passing Ingredients from Recipes to the Shopping List (via a Service)

// ROUTING
// 155. Planning the General Structure
// 156. Setting Up Routes
// 157. Adding Navigation to the App
// 158. Marking Active Routes
// 159. Fixing Page Reload Issues
// 160. Child Routes: Challenge

// 161. Adding Child Routing Together
// 162. Configuring Route Parameters

// 163. Passing Dynamic Parameters to Links

// 164. Styling Active Recipe Items

// 165. Adding Editing Routes

// 166. Retrieving Route Parameters

// 167. Programmatic Navigation to the Edit Page

// 169. Project Cleanup

// try
// try

// 181. Improving the Reactive Service with Observables (Subjects)

// FORMS
// 219. TD: Adding the Shopping List Form

// 220. Adding Validation to the Form
// 221. Allowing the Selection of Items in the List

// 222. Loading the Shopping List Items into the Form

// 223. Updating existing Items

// 224. Resetting the Form
// 225. Allowing the the User to Clear (Cancel) the Form
// 226. Allowing the Deletion of Shopping List Items

// 227. Creating the Template for the (Reactive) Recipe Edit Form

// 228. Creating the Form For Editing Recipes

// 229. Syncing HTML with the Form

// 230. Fixing a Bug
// 231. Adding Ingredient Controls to a Form Array

// 232. Adding new Ingredient Controls

// 233. Validating User Input

// 234. Submitting the Recipe Edit Form

// 235. Adding a Delete and Clear (Cancel) Functionality

// 236. Redirecting the User (after Deleting a Recipe)
// 237. Adding an Image Preview

// 238. Providing the Recipe Service
// 239. Deleting Ingredients and Some Finishing Touches

//--------------------- HTTP
// 278. Module Introduction
// 279. Backend (Firebase) Setup

// ...

// 283. Transforming Response Data

// 284. Resolving Data Before Loading

// 285. Fixing a Bug with the Resolver


//---------------------
// Section 20: Authentication & Route Protection in Angular -------------------
//---------------------
// 288. Adding the Auth Page

// 289. Switching Between Auth Modes

// 290. Handling Form Input

// 291. Preparing the Backend

// 293. Preparing the Signup Request
// 294. Sending the Signup Request
// 295. Adding a Loading Spinner & Error Handling Logic

// 296. Improving Error Handling
// 297. Sending Login Requests
// 298. Login Error Handling

// 299. Creating & Storing the User Data

// 300. Reflecting the Auth State in the UI

// 301. Adding the Token to Outgoing Requests

// 302. Attaching the Token with an Interceptor

// 303. Adding Logout

// 304. Adding Auto-Login

// 305. Adding Auto-Logout

// 306. Adding an Auth Guard

// 310. Adding an Alert Modal Component
// 311. Understanding the Different Approaches
// 312. Using ngIf

// 313. Preparing Programmatic Creation

// 314. Creating a Component Programmatically
// 315. Understanding entryComponents
// 316. Data Binding & Event Binding

// 321. Analyzing the AppModule
// 322. Getting Started with Feature Modules
// 323. Splitting Modules Correctly

// 324. Adding Routes to Feature Modules

// 325. Component Declarations

// 326. The ShoppingList Feature Module

// 327. Understanding Shared Modules

// 328. Understanding the Core Module
// 329. Adding an Auth Feature Module

// 330. Understanding Lazy Loading
// 331. Implementing Lazy Loading
// 332. More Lazy Loading

// 339. Using Environment Variables

//--------------------------------------------------
// 340. Deploying Angular Applications
    // ng build
    // ng build --prod
    // I tried - npm audit fix (or) npm audit fix --force


// ✔  Created service account github-action-554767391 with Firebase Hosting admin permissions.
// ✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_RECIPE_HENNADII.
// i  You can manage your secrets at https://github.com/HennadiiZ/angularUdMaxShwRecipe/settings/secrets.

// Project Console: https://console.firebase.google.com/project/recipe-hennadii/overview
// Hosting URL: https://recipe-hennadii.web.app
