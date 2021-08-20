# ClickUpWeather

## Info
ClickUp weather is a small app with a table component that loads in weather data. You can sort this table by any of its columns, and search for a specific weather condition to filter the list down to your search results.

## Setup
1. Clone down this repo
2. In the repo from terminal, run `npm install`
3. Run `ng serve -o` to run the server and open in browser

## File Tour

* app.module.ts: Imports everything you need to run the ngrx store, cdk components for drag and drop, and a few other helpful things.

* app.component.ts: Imports the AppState, and a `LoadWeatherRequested` class that gets the weather data into the state object. 

* app.component.html: Has a simple header thrown in and renders the <weather-table> 

* app.effects.ts: Uses `@Effect()` to set the value of `LoadWeatherRequested$` by piping in a series of actions that load the initial weather data into state.

* app.store.ts: Where all the application's state is stored (`AppState` and `WeatherDaysState`), and all of the dispatch actions are defined and return the appropriate data in state.

* components/weather-days.component.ts: where a behavior source is created from our state object that funnels data into the html file. Also where functions are defined to reorder columns and dispatch actions to the store.

* components/weather-days.component.html: where we utilize `weatherDays$` and `columns` from `weather-days.component.ts` to render what is in the state object to the page.

* services/weather-days.service.ts: gets the inital weather data in `fetchAllData()` which is utilized when we set the initial state in app.effects.ts

* modules/weather-day.ts: The model for a weather day object is defined.

