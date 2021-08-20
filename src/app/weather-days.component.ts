import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppState, getAllWeather } from './app.store';
import { WeatherDay } from './model/weather-day';
import { WeatherDaysService } from './weather-days.service';
import { CdkDragStart, CdkDropList, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataSource } from '@angular/cdk/collections';

class WeatherDataSource implements DataSource<WeatherDay> {
  constructor(private store: Store<AppState>) {}

  connect() {
    return this.store.select(getAllWeather)
  }

  disconnect() {}
}

@Component({
  selector: 'weather-table',
  templateUrl: './weather-days.component.html',
  styleUrls: ['./weather-days.component.css']
})

export class WeatherDaysComponent implements OnInit {
  sortOptions: string[] = ["date", "high", "low", "conditions", "rain"]
  columns: string[] = ["Date", "High Temp", "Low Temp", "Conditions", "Rain Chance"]

  public WeatherDataSource: WeatherDataSource
  public previousIndex: number
  public weatherDays$: any

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortOptions, event.previousIndex, event.currentIndex);
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  constructor(private store: Store<AppState>, private weatherDaysService: WeatherDaysService) {
    this.WeatherDataSource = new WeatherDataSource(this.store)
    this.weatherDays$ = this.WeatherDataSource.connect()
    this.previousIndex = 0
    console.log(this.WeatherDataSource.connect())
  }

  ngOnInit() {}

  public sortDays(value: string): void {
    this.store.dispatch({type: value.split(" ")[0].toUpperCase()})
  }

  public searchDays(searchTerm: string): void {
    this.store.dispatch({type: "SEARCH", searchTerm: searchTerm})
  }

  public createRowData(weatherState: any) {
    console.log(weatherState)
  }

}