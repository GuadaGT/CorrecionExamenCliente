import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarvelAPIInterface} from "../common/MarvelAPI";

@Injectable({
  providedIn: 'root'
})

export class MarvelAllService {
  // URL base para obtener todos los cómics
  URLBASE = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=0";

  // Constructor: inyección del servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) { }

  // Método para obtener todos los cómics
  getComics(): Observable<MarvelAPIInterface> {
    // Realizar una solicitud GET al servidor utilizando la URLBASE
    return this.http.get<MarvelAPIInterface>(this.URLBASE);
  }
}
