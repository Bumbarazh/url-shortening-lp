import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ShortUrlModel} from "../models/short-url-model";

@Injectable({
  providedIn: 'root'
})
export class GetShortUrlService {
  shortUrlApi: string = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private http: HttpClient) { }

  generateShortUrl(url: string): Observable<ShortUrlModel> {
    return this.http.get<ShortUrlModel>(`${this.shortUrlApi}${url}`);
  }
}
