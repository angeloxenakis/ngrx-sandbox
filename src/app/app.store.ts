import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherDay } from './model/weather-day';

export interface AppState {
  orders: OrdersState;
}

export interface OrdersState {
    allOrdersLoaded: boolean;
    data: WeatherDay[] | [];
}

const intialState = {
  allOrdersLoaded: false,
  data: null
}

export enum ActionTypes {
  LoadOrdersRequested = '[Orders API] Load Orders Requested',
  LoadOrders = '[Orders API] Load Orders'
}

export class LoadOrdersRequested implements Action {
  readonly type = ActionTypes.LoadOrdersRequested;
};

export class LoadOrders implements Action {
  readonly type = ActionTypes.LoadOrders;
  constructor(public payload: WeatherDay[]) {}
}

export type OrderActions = LoadOrdersRequested | LoadOrders;

export function weatherDaysReducer(state = intialState, action: any) {
  console.log()
  switch(action.type) {
      case ActionTypes.LoadOrders:
      return {
        allOrdersLoaded: true,
        data: action.payload
      };
    default:
      return state;
  }
  // switch (action.type) {
  //   case 'INIT': 
  //       return state = [...state]

  //   case 'DATE':
  //       return state = [...state].sort((a, b) => a.date > b.date ? -1 : 1)

  //   case 'HIGH':
  //       return state = [...state].sort((a, b) => a.high > b.high ? -1 : 1)

  //   case 'LOW':
  //       return state = [...state].sort((a, b) => a.low > b.low ? -1 : 1)

  //   case 'RAIN':
  //       return state = [...state].sort((a, b) => a.rainChance > b.rainChance ? -1 : 1)
    
  //   default:
  //       return state
  //   }
}

const getOrders = createFeatureSelector<AppState, OrdersState>('orders');

export const getAllOrders = createSelector(getOrders, state => state.data);
export const getAllOrdersLoaded = createSelector(getOrders, state => state.allOrdersLoaded);
