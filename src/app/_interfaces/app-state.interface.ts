import { State } from "src/app/_interfaces/state.interface";
import { AuthState } from "./auth-state.interface";

export interface AppState {
  shoppingList: State;
  auth: AuthState
}

