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
  sortOptions: string[] = ["Date", "High", "Low", "Conditions", "Rain"]

  public WeatherDataSource: WeatherDataSource
  public previousIndex: number
  public weatherDays$: any

  public weatherData: WeatherDay[] = [
    {date: "8-18-2021", high: 94, low: 68, conditions: "Sunny", rainChance: 20},
    {date: "8-19-2021", high: 100, low: 63, conditions: "Sunny", rainChance: 10},
    {date: "8-20-2021", high: 96, low: 75, conditions: "Partly Cloudy", rainChance: 40},
    {date: "8-21-2021", high: 92, low: 74, conditions: "Rainy", rainChance: 80},
    {date: "8-22-2021", high: 88, low: 62, conditions: "Rainy", rainChance: 90},
    {date: "8-23-2021", high: 90, low: 70, conditions: "Sunny", rainChance: 25},
    {date: "8-24-2021", high: 85, low: 63, conditions: "Rainy", rainChance: 78},
    {date: "8-25-2021", high: 82, low: 61, conditions: "Sunny", rainChance: 10},
    {date: "8-26-2021", high: 78, low: 58, conditions: "Partly Cloudy", rainChance: 50}
  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log("IN HERE")
    moveItemInArray(this.sortOptions, event.previousIndex, event.currentIndex);
  }

  constructor(private store: Store<AppState>, private weatherDaysService: WeatherDaysService) {
    this.WeatherDataSource = new WeatherDataSource(this.store)
    this.weatherDays$ = this.WeatherDataSource.connect()
    this.previousIndex = 0
  }

  ngOnInit() {}

  public sortDays(value: string): void {
    this.store.dispatch({type: value.toUpperCase()})
  }

  public searchDays(searchTerm: string): void {
    this.store.dispatch({type: "SEARCH", searchTerm: searchTerm})
  }


  dragStarted(event: CdkDragStart, index: number ) {
    this.previousIndex = index;
    console.log(this.previousIndex)
  }

}