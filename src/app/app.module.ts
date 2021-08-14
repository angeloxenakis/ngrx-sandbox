import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http"

import { StoreModule } from "@ngrx/store"
import { simpleReducer } from "./simple.reducer"

@NgModule({
  declarations: [
    AppComponent
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