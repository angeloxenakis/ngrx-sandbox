import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherDay } from './model/weather-day';
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})

export class WeatherDaysService {
  constructor(private _httpClient: HttpClient) {}

  // The code below works with a live fetch but is only 3 days worth of forecast data

  // fetchAllWeather(): Observable<WeatherDay[]> {
  //   return new Observable( subscriber => this._httpClient.get("http://api.weatherapi.com/v1/forecast.json?key=0b19ed4e490540ae95845652211608&q=San%20Diego&days=5&aqi=no&alerts=no")
  //     .subscribe(data => subscriber.next(this.cleanData(data))))
  // }

  // public cleanData(data: any): WeatherDay[] {
  //   console.log(
  //     data.forecast.forecastday.map((day: any) => {
  //       return [{
  //         day: day.hour[7], 
  //         date: day.date, 
  //         high: day.hour[7].temp_f,
  //         conditions: day.hour[7].condition.text,
  //         rain: day.hour[7].will_it_rain,
  //         wind: day.hour[7].wind_mph
  //       },
  //       {
  //         day: day.hour[11], 
  //         date: day.date, 
  //         high: day.hour[11].temp_f,
  //         conditions: day.hour[10].condition.text,
  //         rain: day.hour[11].will_it_rain,
  //         wind: day.hour[11].wind_mph
  //       },
  //       {
  //         day: day.hour[15], 
  //         date: day.date,
  //         time: day.time, 
  //         high: day.hour[15].temp_f,
  //         conditions: day.hour[15].condition.text,
  //         rain: day.hour[15].will_it_rain,
  //         wind: day.hour[15].wind_mph
  //       },
  //       {
  //         day: day.hour[18], 
  //         date: day.date, 
  //         high: day.hour[18].temp_f,
  //         conditions: day.hour[18].condition.text,
  //         rain: day.hour[18].will_it_rain,
  //         wind: day.hour[18].wind_mph
  //       }
  //     ]
  //     })
  //   )
  //   return data.forecast.forecastday.map((day: any) => {
  //     return {
  //       date: day.date, 
  //       high: day.day.maxtemp_f, 
  //       low: day.day.mintemp_f, 
  //       conditions: day.day.condition.text, 
  //       rainChance: day.day.daily_will_it_rain
  //     }
  //   })
  // }

  // The sorting and filtering is better showed off with this dummy data
  // But feel free to uncomment `fetchAllWeather()` & `cleanData()` above and comment out the function below

  fetchAllWeather(): Observable<WeatherDay[]> {
    return of([
        {date: "8-18-2021", high: 94, low: 68, conditions: "Sunny", rainChance: 20},
        {date: "8-19-2021", high: 100, low: 63, conditions: "Sunny", rainChance: 10},
        {date: "8-20-2021", high: 96, low: 75, conditions: "Partly Cloudy", rainChance: 40},
        {date: "8-21-2021", high: 92, low: 74, conditions: "Rainy", rainChance: 80},
        {date: "8-22-2021", high: 88, low: 62, conditions: "Rainy", rainChance: 90},
        {date: "8-23-2021", high: 90, low: 70, conditions: "Sunny", rainChance: 25},
        {date: "8-24-2021", high: 85, low: 63, conditions: "Rainy", rainChance: 78},
        {date: "8-25-2021", high: 82, low: 61, conditions: "Sunny", rainChance: 10},
        {date: "8-26-2021", high: 78, low: 58, conditions: "Partly Cloudy", rainChance: 50}
    ])
  }
}