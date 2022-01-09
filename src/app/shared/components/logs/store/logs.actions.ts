import { createAction, props } from '@ngrx/store';

export const LogActionTypes = {
  ADD_LOG_MESSAGE: '[LOGS] ADD LOG MESSAGE',
  CLEAR_LOGS: '[LOGS] CLEAR LOGS',
  TOGGLE_LOG_LIST: '[LOGS] TOGGLE LOG LIST',
}

export const addLogMessage = createAction(
  LogActionTypes.ADD_LOG_MESSAGE,
  props<{ message: string }>()
);

export const clearLogs = createAction(
  LogActionTypes.CLEAR_LOGS
);

export const toggleLogList = createAction(
  LogActionTypes.TOGGLE_LOG_LIST
);