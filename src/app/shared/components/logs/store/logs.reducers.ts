import { clearLogs, addLogMessage, toggleLogList } from "./logs.actions";
import { createReducer, on } from "@ngrx/store";

export interface State {
  lastMessage: string,
  messageList: string[],
  listExpanded: boolean
}

export const initialState: State = {
  lastMessage: '',
  messageList: [],
  listExpanded: false,
}

export const logsReducer = createReducer(
  initialState,
  on(addLogMessage, (state, { message }) => ({ ...state, lastMessage: message, messageList: [...state.messageList, message] })),
  on(clearLogs, (state) => ({...state, lastMessage: '', messageList: []})),
  on(toggleLogList, (state) => ({...state, listExpanded: !state.listExpanded})),
);