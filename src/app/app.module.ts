import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store"
import { simpleReducer } from "./simple.reducer"
import { Observable, of, from } from "rxjs"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ 
      days: simpleReducer 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
