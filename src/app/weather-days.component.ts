import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { AppState, getAllWeather } from './app.store';
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor(private store: Store<AppState>, private weatherDaysService: WeatherDaysService) {
    this.weatherDays$ = this.store.select(getAllWeather);
    DataSource = this.weatherDays$
  }

  ngOnInit() {}

  public sortDays(value: string): void {
    this.store.dispatch({type: value.toUpperCase()})
  }

  public searchDays(searchTerm: string): void {
    this.store.dispatch({type: "SEARCH", searchTerm: searchTerm})
  }
}

// export class ExampleDataSource extends DataSource<WeatherDay> {
//   /** Stream of data that is provided to the table. */
//   data = new BehaviorSubject<WeatherDay[]>(ELEMENT_DATA);

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<WeatherDay[]> {
//     return this.data;
//   }

//   disconnect() {}
// }