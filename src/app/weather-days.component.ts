import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAllWeather, LoadWeatherRequested } from './app.store';
import { Observable } from 'rxjs';
import { WeatherDay } from './model/weather-day';
import { WeatherDaysService } from './weather-days.service';


@Component({
  selector: 'weather-table',
  templateUrl: './weather-days.component.html',
  styleUrls: ['./weather-days.component.css']
})

export class WeatherDaysComponent implements OnInit {
  weatherDays$: Observable<WeatherDay[]>;
  sortOptions: string[] = ["Date", "High", "Low", "Conditions", "Rain"]

  constructor(private store: Store<AppState>, private weatherDaysService: WeatherDaysService) {
    this.weatherDays$ = this.store.select(getAllWeather);
  }

  ngOnInit() {
    this.weatherDaysService.getData().subscribe(data => this.cleanData(data))
  }

  public cleanData(data: any): any[] {
    let weatherArray: [] = data.forecast.forecastday.map((day: any) => {
      return {date: day.date, high: day.day.maxtemp_f, low: day.day.mintemp_f, conditions: day.day.condition.text, rainChance: day.day.daily_will_it_rain}
    })
    console.log("I WANT STATE TO BE SET TO THIS:", weatherArray)
    return weatherArray
  }

  public sortDays(value: string): void {
    console.log(value.toUpperCase())
    this.store.dispatch({type: value.toUpperCase()})
  }

  public searchDays(searchTerm: string): void {
    console.log(searchTerm)
    this.store.dispatch({type: "SEARCH", searchTerm: searchTerm})
  }

}