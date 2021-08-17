import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherDay } from './model/weather-day';

export class WeatherDaysService {
  fetchAllOrders(): Observable<WeatherDay[]> {
    console.log("Wassup")
    
    return of([
        {date: 20, high: 94, low: 68, conditions: "Sunny", rainChance: 20},
        {date: 10, high: 100, low: 63, conditions: "Sunny", rainChance: 10},
        {date: 13, high: 96, low: 75, conditions: "Partly Cloudy", rainChance: 40},
        {date: 22, high: 92, low: 74, conditions: "Rainy", rainChance: 80},
        {date: 8, high: 88, low: 62, conditions: "Rainy", rainChance: 90},
        {date: 5, high: 90, low: 70, conditions: "Sunny", rainChance: 25},
        {date: 26, high: 85, low: 63, conditions: "Rainy", rainChance: 78},
        {date: 14, high: 82, low: 61, conditions: "Sunny", rainChance: 10},
        {date: 6, high: 78, low: 58, conditions: "Partly Cloudy", rainChance: 50}
    ])
  }
}