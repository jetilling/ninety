import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './task-parrot.reducer';

export const selectState = createFeatureSelector<State>('taskParrot');

export const getPreferences = createSelector(
  selectState,
  (state: State) => state.preferences
);
