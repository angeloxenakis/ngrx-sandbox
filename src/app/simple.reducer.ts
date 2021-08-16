import { Action } from "@ngrx/store"
import { AppService } from "./app.service"

export function simpleReducer(
    state: any[] = [
        {date: 20, high: 94, low: 68, conditions: "Sunny", rainChance: 20},
        {date: 10, high: 100, low: 63, conditions: "Sunny", rainChance: 10},
        {date: 13, high: 96, low: 75, conditions: "Partly Cloudy", rainChance: 40},
        {date: 22, high: 92, low: 74, conditions: "Rainy", rainChance: 80},
        {date: 8, high: 88, low: 62, conditions: "Rainy", rainChance: 90},
        {date: 5, high: 90, low: 70, conditions: "Sunny", rainChance: 25},
        {date: 26, high: 85, low: 63, conditions: "Rainy", rainChance: 78},
        {date: 14, high: 82, low: 61, conditions: "Sunny", rainChance: 10},
        {date: 6, high: 78, low: 58, conditions: "Partly Cloudy", rainChance: 50}
    ], 
    // state: any[] = [],
    action: Action) {
    console.log(action.type, state)


    switch (action.type) {
        case 'INIT': 
            return state = [...state]

        case 'DATE':
            return state = [...state].sort((a, b) => a.date > b.date ? -1 : 1)

        case 'HIGH':
            return state = [...state].sort((a, b) => a.high > b.high ? -1 : 1)

        case 'LOW':
            return state = [...state].sort((a, b) => a.low > b.low ? -1 : 1)

        case 'RAIN':
            return state = [...state].sort((a, b) => a.rainChance > b.rainChance ? -1 : 1)
        
        default:
            return state
    }
}