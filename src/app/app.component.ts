import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, LoadWeatherRequested } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherRequested());
  }
}