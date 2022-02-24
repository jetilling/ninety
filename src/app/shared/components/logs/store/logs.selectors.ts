import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './logs.reducers';

export const selectState = createFeatureSelector<State>('logs');
// export const selectState = (state: State) => state;

export const selectMessageList = createSelector(
  selectState,
  (state: State) => state.messageList
)

export const selectLastMessage = createSelector(
  selectState,
  (state: State) => state.lastMessage
)

export const selectListExpanded = createSelector(
  selectState,
  (state: State) => state.listExpanded
)