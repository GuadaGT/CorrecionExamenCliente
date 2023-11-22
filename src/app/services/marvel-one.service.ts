import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarvelAPIInterface } from '../common/MarvelAPI';

@Injectable({
  providedIn: 'root'
})

export class MarvelOneService {
  // URL base para obtener información de un cómic específico
  URLBASE = 'https://gateway.marvel.com/v1/public/comics/';

  // Parámetros adicionales para la solicitud HTTP
  URLFINAL = '?ts=1&apikey=de4936375b2f60caca31e72756cabaab&hash=14477f62c252b0847f9077365d40fc22&offset=20';

  // Constructor: inyección del servicio HttpClient para realizar solicitudes HTTP
  constructor(private http: HttpClient) {}

  // Método para obtener un cómic específico por su ID
  getComic(id: number): Observable<MarvelAPIInterface> {
    // Realizar una solicitud GET al servidor utilizando la URLBASE concatenada con el ID y URLFINAL
    return this.http.get<MarvelAPIInterface>(this.URLBASE + id + this.URLFINAL);
  }
}
