import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LoadOrdersRequested, ActionTypes, LoadOrders, AppState, getAllOrdersLoaded} from './app.store';
import { withLatestFrom, exhaustMap, filter, map } from 'rxjs/operators';
import { WeatherDaysService } from './weather-days.service';

@Injectable()
export class AppEffects {
  @Effect()
  loadOrdersRequested$ = this.actions$.pipe(
    ofType<LoadOrdersRequested>(ActionTypes.LoadOrdersRequested),
    withLatestFrom(this.store.select(getAllOrdersLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.weatherDaysService.fetchAllOrders().pipe(
      map(result => new LoadOrders(result))
    ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherDaysService: WeatherDaysService
  ) {}
}
