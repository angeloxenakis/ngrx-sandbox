import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { WeatherDaysComponent } from './components/weather-days.component';
import { weatherDaysReducer } from './app.store';
import { AppEffects } from './app.effects';
import { WeatherDaysService } from './services/weather-days.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule} from '@angular/cdk/drag-drop'
const routes = [
  {
    path: '',
    component: WeatherDaysComponent
  }
]

@NgModule({
  imports: [
    DragDropModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CdkTableModule,
    StoreModule.forRoot({ weather: weatherDaysReducer }),
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
