import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, Observable, take, tap } from 'rxjs';
import { Ingredient } from '../_models/ingredient.model';
import { Recipe } from '../_models/recipe.model';
import { AuthService } from './auth.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  LINK = 'https://recipe-hennadii-default-rtdb.firebaseio.com/';
  endpoint = 'posts.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveRecipes(): Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes();
    return this.http.put<Recipe[]>(`${this.LINK}${this.endpoint}`, recipes);
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.LINK}${this.endpoint}`)
      .pipe(
        map((recipes)=> {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          })
        }),
        tap((recipes)=> {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
