import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class AppService {
    constructor(private _httpClient: HttpClient) {}

    public getData(): Observable<any> {
        return this._httpClient.get("http://api.weatherapi.com/v1/forecast.json?key=0b19ed4e490540ae95845652211608&q=San%20Diego&days=5&aqi=no&alerts=no")
    }
}