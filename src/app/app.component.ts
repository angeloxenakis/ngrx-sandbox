import { Component, OnInit } from '@angular/core';
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
  days$: Observable<any[]>
  sortOptions

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortOptions, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.appService.getData().subscribe(x => console.log(x))
  }

  constructor(private store: Store<AppState>, private appService: AppService) {
    this.days$ = this.store.select('days')
    this.sortOptions = this.getSortOptions()
  }

  public getSortOptions(): string[] {
    return ["Date", "High", "Low", "Rain"]
  }

  public sortDays(value: string): void {
    this.store.dispatch({type: value.toUpperCase()})
  }
}