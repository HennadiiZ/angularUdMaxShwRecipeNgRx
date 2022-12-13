import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';
// import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeService.getRecipe(this.id);
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  ToShoppingList(): void{
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    this.router.navigate(['shopping-list']);
  }

  onEditRecipe(): void {
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate([''], {relativeTo: this.route});
  }
}
