// import { Action } from "@ngrx/store";
import { State } from "src/app/_interfaces/state.interface";
import { Ingredient } from "../../_models/ingredient.model";
// import { ADD_INGREDIENT } from "./shopping-list.actions";
import * as ShoppingListActions from "./shopping-list.actions";

// my state should be a js object:
// const initialState = { // this is my initial state
//   ingredients: [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 15)
//   ]
// };

const initialState: State = { // this is my initial state
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

// shopping list service we want to replace
export function shoppingListReducer(
  state: State = initialState,
  // action: ShoppingListActions.AddIngredient

  // action: ShoppingListActions.AddIngredient | ShoppingListActions.AddIngredients
  action: ShoppingListActions.ShoppingListActions
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
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...[action.payload]
        ]
      };
    //
    case ShoppingListActions.UPDATE_INGREDIENT:
      // const ingredient = state.ingredients[action.payload.index];
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        // ...action.payload.ingredient
        ...action.payload
      };
      const updatedIngredients = [...state.ingredients];
      // updatedIngredients[action.payload.index] = updatedIngredient;
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((_, index) => {
          // return index !== action.payload;
          return index !== state.editedIngredientIndex;
        })
      };
    //
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[ action.payload] }
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredientIndex: null,
        editedIngredient: -1
      };
    default:
      return state;
  }
}
