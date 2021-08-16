import { Component } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable } from "rxjs"
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { AppService } from "./app.service"

interface AppState {
  days: []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arr: [] = []
  days$: Observable<any[]>
  sortOptions

  constructor(private store: Store<AppState>, private appService: AppService) {
    this.days$ = this.store.select('days')
    this.sortOptions = this.getSortOptions()
  }

  ngOnInit(): void {
    this.appService.getData().subscribe(data => this.cleanData(data))
  }

  public cleanData(data: any): any[] {
    let weatherArray: [] = data.forecast.forecastday.map((day: any) => {
      return {date: day.date, high: day.day.maxtemp_f, low: day.day.mintemp_f, conditions: day.day.condition.text, rainChance: day.day.daily_will_it_rain}
    })
    console.log("I WANT STATE TO BE SET TO THIS:", weatherArray)
    return weatherArray
  }

  public getSortOptions(): string[] {
    return ["Date", "High", "Low", "Rain"]
  }

  public sortDays(value: string): void {
    this.store.dispatch({type: value.toUpperCase()})
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortOptions, event.previousIndex, event.currentIndex);
  }
}