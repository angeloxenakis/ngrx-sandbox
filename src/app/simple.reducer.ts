import { Action } from "@ngrx/store"

export function simpleReducer(
    state: any[] = [
        {date: 20, high: 94, low: 62, conditions: "Sunny", rainChance: 20},
        {date: 10, high: 100, low: 63, conditions: "Sunny", rainChance: 10},
        {date: 13, high: 96, low: 75, conditions: "Partly Cloudy", rainChance: 40},
        {date: 22, high: 92, low: 74, conditions: "Rainy", rainChance: 80},
    ], 
    action: Action) {
    console.log(action.type, state)

    switch (action.type) {
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