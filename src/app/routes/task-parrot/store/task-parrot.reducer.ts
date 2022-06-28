import { createReducer } from '@ngrx/store';
import { DailyPreference } from './task-parrot.model';

export interface State {
  preferences: DailyPreference[];
}

const defaultPreferences: DailyPreference[] = [
  {
    day: 'Sunday',
    available: [],
    loud: ['10-4'],
  },
  {
    day: 'Monday',
    available: [],
    loud: ['6-7', '8-9'],
  },
  {
    day: 'Tuesday',
    available: ['12-1'],
    loud: ['5-2'],
  },
  {
    day: 'Wednesday',
    available: [],
    loud: [],
  },
  {
    day: 'Thursday',
    available: ['3-9'],
    loud: [],
  },
  {
    day: 'Friday',
    available: [],
    loud: [],
  },
  {
    day: 'Saturday',
    available: ['11-4'],
    loud: ['11-1'],
  },
];

export const initialState: State = {
  preferences: defaultPreferences,
};

export const taskParrotReducer = createReducer(initialState);
