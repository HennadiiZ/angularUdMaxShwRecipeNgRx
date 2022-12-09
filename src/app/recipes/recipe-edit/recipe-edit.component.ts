import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ingredient } from 'src/app/_models/ingredient.model';
import { Recipe } from 'src/app/_models/recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  idIngredient: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // console.log(this.editMode);
      this.initForm();
    });
    // console.log('123+', this.recipeService.getRecipe(this.id))
  }

  private initForm():void {
    let recipeName: any = '';
    let recipeImagePath: any = '';
    let recipeDescription: any = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit():void {
    // console.log(this.recipeForm);

    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );

    if(this.editMode) {
      // this.recipeService.updateRecipe(this.id, newRecipe);
      this.recipeService.updateRecipe(this.id,  this.recipeForm.value);
      // console.log("updateRecipe", this.id,  this.recipeForm.value);
      // console.log(this.recipeService.getRecipes());
    } else {
      // this.recipeService.addRecipe(newRecipe);
      this.recipeService.addRecipe(this.recipeForm.value);
      // console.log("addRecip", this.recipeForm.value);
      // console.log(this.recipeService.getRecipes());
    }
    this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient():void {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
      })
    )
  }

  onCancel(): void {
    this.router.navigate([''], {relativeTo: this.route});
    this.editMode = false;
  }

  onDeleteIngredient(i: number): void {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
    // (<FormArray>this.recipeForm.get('ingredients')).clear();
  }
}
