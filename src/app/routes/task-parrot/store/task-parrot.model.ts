// export interface Preferences: DailyPreference[]

export interface DailyPreference {
  day: string;
  available: string[];
  loud: string[];
}
