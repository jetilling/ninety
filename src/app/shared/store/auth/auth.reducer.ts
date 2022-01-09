import { loginFailure, loginSuccess, logoutSuccess, updateUser } from "./auth.actions";
import { createReducer, on } from "@ngrx/store";

export interface State {
  authenticated: boolean,
  user: {},
  errorMessage: string
}

export const initialState: State = {
  authenticated: false,
  user: {},
  errorMessage: ''
}

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({ ...state, authenticated: true})),
  on(loginFailure, (state, { error }) => ({ ...state, authenticated: false, user: {}, errorMessage: error})),
  on(logoutSuccess, (state) => ({...state, authenticated: false, user: {}})),
  on(updateUser, (state, { user }) => ({...state, authenticated: true, user: user}))
);