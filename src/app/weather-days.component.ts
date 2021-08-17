import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAllOrders, LoadOrdersRequested } from './app.store';
import { Observable } from 'rxjs';
import { WeatherDay } from './model/weather-day';

@Component({
  selector: 'weather-days',
  templateUrl: './weather-days.component.html'
})

export class WeatherDaysComponent implements OnInit {
  weatherDays$: Observable<WeatherDay[]>;
  sortOptions: string[] = ["Date", "High", "Low", "Conditions", "Rain"]

  constructor(private store: Store<AppState>) {
    this.weatherDays$ = this.store.select(getAllOrders);
  }

  public sortDays(value: string): void {
    console.log(value)
    // this.store.dispatch({type: value.toUpperCase()})
  }

  ngOnInit() {
  }
}