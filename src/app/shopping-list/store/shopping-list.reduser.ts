import { Action } from "@ngrx/store";
import { Ingredient } from "../../_models/ingredient.model";
// import { ADD_INGREDIENT } from "./shopping-list.actions";
import * as ShoppingListActions from "./shopping-list.actions";

// my state should be a js object:
const initialState = { // this is my initial state
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ]
};

// shopping list service we want to replace
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:

      // return {
      //   ...state,
      //   ingredients: [
      //     ...state.ingredients,
      //     action
      //   ]
      // };

      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload
        ]
      };
    default:
      return state;
  }
}
