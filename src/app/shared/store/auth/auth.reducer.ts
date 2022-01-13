import { loginFailure, loginSuccess, logoutSuccess, updateUser } from "./auth.actions";
import { createReducer, on } from "@ngrx/store";

export interface State {
  authenticated: boolean,
  user: {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    created_at: string,
    updated_at: string
  },
  errorMessage: string
}

const emptyUser = {
  id: 0,
  name: '',
  email: '',
  email_verified_at: '',
  created_at: '',
  updated_at: ''
}

export const initialState: State = {
  authenticated: true,
  user: emptyUser,
  errorMessage: ''
}

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({ ...state, authenticated: true})),
  on(loginFailure, (state, { error }) => ({ ...state, authenticated: false, user: emptyUser, errorMessage: error})),
  on(logoutSuccess, (state) => ({...state, authenticated: false, user: emptyUser})),
  on(updateUser, (state, { user }) => ({...state, authenticated: true, user: user}))
);