import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { StoreModule } from "@ngrx/store"
import { simpleReducer } from "./simple.reducer"
import { WeatherTableComponent } from './weather-table/weather-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      days: simpleReducer 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }