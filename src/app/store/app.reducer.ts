import * as fromShoppingList from '../shopping-list/store/shopping-list.reduser';
import * as fromAuth from '../auth/store/auth.reducer';
import { AppState } from '../_interfaces/app-state.interface';
import { ActionReducerMap } from '@ngrx/store';

// export const appReducer: ActionReducerMap<AppState>
export const appReducer: ActionReducerMap<any> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
}
