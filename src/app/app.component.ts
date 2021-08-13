import { Component } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable, of, from } from "rxjs"

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

  constructor(private store: Store<AppState>) {
    this.days$ = this.store.select('days')
    this.sortOptions = this.getSortOptions()
  }

  getSortOptions() {
    return ["Date", "High", "Low", "Rain"]
  }

  sortDays(value: string) {
    this.store.dispatch({type: value.toUpperCase()})
  }
}