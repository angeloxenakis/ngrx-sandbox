import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LoadWeatherRequested, ActionTypes, LoadWeather, AppState, getAllWeatherLoaded} from './app.store';
import { withLatestFrom, exhaustMap, filter, map } from 'rxjs/operators';
import { WeatherDaysService } from './weather-days.service';

@Injectable()
export class AppEffects {

  @Effect()
  LoadWeatherRequested$ = this.actions$.pipe(
    ofType<LoadWeatherRequested>(ActionTypes.LoadWeatherRequested),
    withLatestFrom(this.store.select(getAllWeatherLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.weatherDaysService.fetchAllWeather().pipe(
      map(result => new LoadWeather(result))
    ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherDaysService: WeatherDaysService
  ) {}
  
}
