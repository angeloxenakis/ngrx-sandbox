import { Component } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable, of, from } from "rxjs"

interface AppState {
  days: [
      {date: 20, high: 94, low: 62},
      {date: 10, high: 100, low: 63},
      {date: 13, high: 96, low: 75},
      {date: 22, high: 92, low: 74},
    ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'clickup-take-home';

  days$: Observable<any[]>

  constructor(private store: Store<AppState>) {
    this.days$ = this.store.select('days')
  }

  sortByDate() {
    this.store.dispatch({type: 'DATE'})
  }

  sortByHigh() {
    this.store.dispatch({type: 'HIGH'})
  }

  sortByLow() {
    this.store.dispatch({type: 'LOW'})
  }
}
