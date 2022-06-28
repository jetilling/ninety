import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
  NEW_ACTION: '[Type] ACTION',
};

export const someAction = createAction(
  ActionTypes.NEW_ACTION,
  props<{ propOne: string; propTwo: string }>()
);
