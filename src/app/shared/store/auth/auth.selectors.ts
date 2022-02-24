import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './auth.reducer';

export const selectState = createFeatureSelector<State>('auth');

export const selectAuthenticated = createSelector(
  selectState,
  (state: State) => state.authenticated
)

export const selectUser = createSelector(
  selectState,
  (state: State) => state.user
)