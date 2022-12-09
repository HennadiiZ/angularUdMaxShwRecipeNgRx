import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/_models/recipe.model';
import { User } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() toggler = new EventEmitter();
  subscriptions = new Subscription;
  collapsed = false;
  user = null; //
  isAuthenticated = false;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService
    // private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authService.userSubject.subscribe(((user: User) => {
        this.user = user;
        // this.isAuthenticated = !user ? false : true;
        this.isAuthenticated = !!user;
      }))
    )
  }

  // onRecipe() {
  //   // this.toggler.emit(false);
  //   this.router.navigate(['recipes']);
  // }

  // onShoppingList() {
  //   // this.toggler.emit(true);
  //   this.router.navigate(['shopping-list']);
  // }

  saveData(): void {
    // const recipes = this.recipeService.getRecipes();
    this.subscriptions.add();

    this.httpService.saveRecipes().subscribe(
      ((data: Recipe[])=> {
        console.log(data);
      })
    );
  }

  fetchData(): void {
    this.subscriptions.add();
    this.httpService.fetchRecipes().subscribe();
  }

  logOut(): void {
    // this.subscriptions.add();
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
