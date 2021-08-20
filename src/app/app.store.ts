import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherDay } from './model/weather-day';


export interface AppState {
  weather: WeatherDaysState;
}

export interface WeatherDaysState {
    allWeatherLoaded: boolean;
    data: WeatherDay[] | [];
    searchResults: WeatherDay[] | [];
}

const intialState = {
  allWeatherLoaded: false,
  data: null
}

export enum ActionTypes {
  LoadWeatherRequested = '[Weather API] Load Weather Requested',
  LoadWeather = '[Weather API] Load Weather',
  Date = "DATE",
  High = "HIGH",
  Low = "LOW",
  Conditions = "CONDITIONS",
  RainChance = "RAIN",
  Search = "SEARCH"
}

export class LoadWeatherRequested implements Action {
  readonly type = ActionTypes.LoadWeatherRequested;
};

export class LoadWeather implements Action {
  readonly type = ActionTypes.LoadWeather;
  constructor(public payload: WeatherDay[]) {}
}

export class Date implements Action {
  readonly type = ActionTypes.Date
  constructor(public payload: WeatherDay[]) {}
}

export class High implements Action {
  readonly type = ActionTypes.High
  constructor(public payload: WeatherDay[]) {}
}

export class Low implements Action {
  readonly type = ActionTypes.Low
  constructor(public payload: WeatherDay[]) {}
}

export class Conditions implements Action {
  readonly type = ActionTypes.Conditions
  constructor(public payload: WeatherDay[]) {}
}

export class RainChance implements Action {
  readonly type = ActionTypes.Conditions
  constructor(public payload: WeatherDay[]) {}
}

export class Search implements Action {
  readonly type = ActionTypes.Search
  constructor(public payload: WeatherDay[]) {}
}

export type WeatherActions = LoadWeatherRequested | LoadWeather | Date | High | Low | Conditions | RainChance;

const getWeather = createFeatureSelector<AppState, WeatherDaysState>('weather');
export const getAllWeather = createSelector(getWeather, state => state.searchResults);
export const getAllWeatherLoaded = createSelector(getWeather, state => state.allWeatherLoaded);

export function weatherDaysReducer(state: any = intialState, action: any) {
  switch(action.type) {

      case ActionTypes.LoadWeather:
      return {
        ...state,
        allWeatherLoaded: true,
        data: action.payload,
        searchResults: action.payload
      };

      case ActionTypes.Date:
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)
        };

      case ActionTypes.High:
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.high > b.high ? -1 : a.high < b.high ? 1 : 0)
        };

      case ActionTypes.Low:
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.low > b.low ? -1 : a.low < b.low ? 1 : 0)
        };

      case ActionTypes.Conditions:
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.conditions > b.conditions ? 1 : a.conditions < b.conditions ? -1 : 0)
        };

      case ActionTypes.RainChance:
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.rainChance > b.rainChance ? -1 : a.rainChance < b.rainChance ? 1 : 0)
        };

      case ActionTypes.Search:
        return {
          ...state,
          searchResults: [...state.data].filter(day => (day.conditions.toLowerCase()).includes(action.searchTerm.toLowerCase()))
        };

      default:
        return state;
  }
}