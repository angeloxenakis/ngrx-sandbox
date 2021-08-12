import { Action } from "@ngrx/store"

export function simpleReducer(
    state: any[] = [
        {date: 20, high: 94, low: 62},
        {date: 10, high: 100, low: 63},
        {date: 13, high: 96, low: 75},
        {date: 22, high: 92, low: 74},
    ], 
    action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case 'DATE':
            return state = [
                {date: 10, high: 100, low: 63},
                {date: 13, high: 96, low: 75},
                {date: 22, high: 92, low: 74},
                {date: 20, high: 94, low: 62}
            ]

        case 'HIGH':
            return state = [
                {date: 10, high: 100, low: 63},
                {date: 13, high: 96, low: 75},
                {date: 20, high: 94, low: 62},
                {date: 22, high: 92, low: 74}
            ]

        case 'LOW':
            return state = [
                {date: 13, high: 96, low: 75},
                {date: 22, high: 92, low: 74},
                {date: 10, high: 100, low: 63},
                {date: 20, high: 94, low: 62}
            ]
        
        default:
            return state

    }
}