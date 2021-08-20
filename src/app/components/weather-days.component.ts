import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAllWeather } from '../app.store';
import { WeatherDay } from '../models/weather-day';
import { WeatherDaysService } from '../services/weather-days.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
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
  dataProperties: string[] = ["date", "high", "low", "conditions", "rain"]
  columns: string[] = ["Date", "High Temp", "Low Temp", "Conditions", "Rain Chance"]

  public WeatherDataSource: WeatherDataSource
  public previousIndex: number
  public weatherDays$: any

  constructor(private store: Store<AppState>, private weatherDaysService: WeatherDaysService) {
    this.WeatherDataSource = new WeatherDataSource(this.store)
    this.weatherDays$ = this.WeatherDataSource.connect()
    this.previousIndex = 0
  }

  ngOnInit() {}

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataProperties, event.previousIndex, event.currentIndex);
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

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