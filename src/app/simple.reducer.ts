import { Action } from "@ngrx/store"

export function simpleReducer(
    state: object[] = [
        {date: 20, high: 94, low: 62},
        {date: 10, high: 100, low: 63},
        {date: 13, high: 96, low: 75},
        {date: 22, high: 92, low: 74},
    ], 
    action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case 'ASCENDING':
            return state = [
                {date: 20, high: 94, low: 62},
                {date: 10, high: 100, low: 63},
                {date: 13, high: 96, low: 75},
                {date: 22, high: 92, low: 74},
            ]

        case 'DESCENDING':
            return state = [
                {date: 20, high: 94, low: 62},
                {date: 10, high: 100, low: 63},
                {date: 13, high: 96, low: 75},
                {date: 22, high: 92, low: 74},
            ]
        
        default:
            return state

    }
}