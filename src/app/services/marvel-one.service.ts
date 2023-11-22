import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MarvelAPIInterface} from "../common/MarvelAPI";
//Repetir One con Marvel Comics total
@Injectable({
  providedIn: 'root'
})
export class MarvelOneService {
  URLBASE = "https://gateway.marvel.com/v1/public/comics/";
  URLFINAL = "?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=20";

  constructor(private http: HttpClient) {
  }

  getComic(id: number): Observable<MarvelAPIInterface> {
    return this.http.get<MarvelAPIInterface>(this.URLBASE + id + this.URLFINAL);
  }
}
