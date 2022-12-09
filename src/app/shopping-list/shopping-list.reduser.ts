import { Action } from "@ngrx/store";
import { Ingredient } from "../_models/ingredient.model";

// my state should be a js object:
const initialState = { // this is my initial state
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ]
};


// shopping list service we want to replace
export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action
        ]
      };

  }
}
