import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/_models/recipe.model';
import { User } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription;
  collapsed = false;
  user = null; //
  isAuthenticated = false;

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.authService.userSubject.subscribe(((user: User) => {
        this.user = user;
        this.isAuthenticated = !!user;
      }))
    )
  }

  saveData(): void {
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
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
