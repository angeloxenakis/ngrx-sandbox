import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class AppService {

    constructor(private _httpClient: HttpClient) {

    }

    public getData(): Observable<any> {
        return this._httpClient.get("https://catfact.ninja/facts")
    }
}