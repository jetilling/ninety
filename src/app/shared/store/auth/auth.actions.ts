import { createAction, props } from '@ngrx/store';

export const AuthActionTypes = {
  LOGIN: '[Auth] LOGIN',
  LOGIN_SUCCESS: '[Auth] LOGIN SUCCESS',
  LOGIN_FAILURE: '[Auth] LOGIN FAILURE',
  LOGOUT: '[AUTH] LOGOUT',
  GET_USER: '[AUTH] GET USER',
  UPDATE_USER: '[AUTH] UPDATE USER',
}

export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: any}>()
);

export const logout = createAction(
  AuthActionTypes.LOGOUT
);

export const getUser = createAction(
  AuthActionTypes.GET_USER
);

export const updateUser = createAction(
  AuthActionTypes.UPDATE_USER,
  props<{ user: any }>()
);