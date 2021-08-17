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

export class Search implements Action {
  readonly type = ActionTypes.Search
  constructor(public payload: WeatherDay[]) {}
}

export type WeatherActions = LoadWeatherRequested | LoadWeather | Date | High ;

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
          searchResults: action.payload
        };

      case ActionTypes.High:
        console.log([...state.data].sort((a: any, b: any) => a.high > b.high ? -1 : a.high < b.high ? 1 : 0))
        return {
          ...state,
          searchResults: [...state.searchResults].sort((a: any, b: any) => a.high > b.high ? -1 : a.high < b.high ? 1 : 0)
        };

      case ActionTypes.Search:
        console.log(action)
        return {
          ...state,
          searchResults: [...state.data].filter(day => day.conditions.includes(action.searchTerm))
        };
  
      

      default:
        return state;
  }
  // switch (action.type) {
  //   case 'DATE':
  //       return state = [...state].sort((a, b) => a.date > b.date ? -1 : 1)

  // case 'HIGH':
  //   return state = [...state].sort((a, b) => a.high > b.high ? -1 : 1)

  //   case 'LOW':
  //       return state = [...state].sort((a, b) => a.low > b.low ? -1 : 1)

  //   case 'RAIN':
  //       return state = [...state].sort((a, b) => a.rainChance > b.rainChance ? -1 : 1)
    
  //   default:
  //       return state
  //   }
}

const getWeather = createFeatureSelector<AppState, WeatherDaysState>('weather');



export const getAllWeather = createSelector(getWeather, state => state.searchResults);
export const getAllWeatherLoaded = createSelector(getWeather, state => state.allWeatherLoaded);

