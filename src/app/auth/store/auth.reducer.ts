import { AuthState } from "src/app/_interfaces/auth-state.interface";

const initialState: AuthState = {
  user: null
}

export function authReducer(state = initialState, action) {
  return state;
}
