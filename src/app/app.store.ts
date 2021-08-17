import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherDay } from './model/weather-day';


export interface AppState {
  weather: WeatherDaysState;
}

export interface WeatherDaysState {
    allWeatherLoaded: boolean;
    data: WeatherDay[] | [];
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
  Conditions = "CONDITIONS"
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

export type WeatherActions = LoadWeatherRequested | LoadWeather | Date | High ;

export function weatherDaysReducer(state: any = intialState, action: any) {
  switch(action.type) {
      
      
      case ActionTypes.LoadWeather:
      return {
        allWeatherLoaded: true,
        data: action.payload
      };

      case ActionTypes.Date:
        return {
          allWeatherLoaded: true,
          data: action.payload
        };

      case ActionTypes.High:
        return {
          allWeatherLoaded: true,
          data: action.payload
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

export const getAllWeather = createSelector(getWeather, state => state.data);
export const getAllWeatherLoaded = createSelector(getWeather, state => state.allWeatherLoaded);

