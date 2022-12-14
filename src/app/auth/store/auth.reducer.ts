import { AuthState } from "src/app/_interfaces/auth-state.interface";
import { User } from "src/app/_models/user.model";
// import { AuthActions } from "./auth.actions";
import * as AuthActions  from "./auth.actions";

const initialState: AuthState = {
  user: null
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
      return {
        ...state,
        user: user
      }
    case AuthActions.LOGIN:
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}
