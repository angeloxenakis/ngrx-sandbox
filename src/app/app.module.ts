import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { WeatherDaysComponent } from './weather-days.component';
import { weatherDaysReducer } from './app.store';
import { AppEffects } from './app.effects';
import { WeatherDaysService } from './weather-days.service';

const routes = [
  {
    path: '',
    component: WeatherDaysComponent
  }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ orders: weatherDaysReducer }),
    EffectsModule.forRoot([AppEffects]),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  declarations: [ AppComponent, WeatherDaysComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AppEffects,
    WeatherDaysService
  ]
})
export class AppModule { }
