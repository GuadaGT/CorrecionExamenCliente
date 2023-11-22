import {Component, OnInit} from '@angular/core';
import {MarvelAllService} from "../../services/marvel-all.service";
import {Marvel} from "../../common/MarvelAPI";

@Component({
  selector: 'app-marvel-all',
  templateUrl: './marvel-all.component.html',
  styleUrls: ['./marvel-all.component.css']
})
export class MarvelAllComponent implements OnInit {
  // Arreglo para almacenar los cómics obtenidos del servicio
  marvelComics: Marvel[] = [];

  // Constructor: inyección del servicio MarvelAllService
  constructor(private marvelService: MarvelAllService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Cargar los cómics al iniciar el componente
    this.loadComics();
  }

  // Método privado para cargar los cómics
  private loadComics() {
    // Llamar al servicio para obtener todos los cómics
    this.marvelService.getComics().subscribe(
      {
        next: (value) => {
          // Asignar los cómics obtenidos al arreglo marvelComics
          this.marvelComics = value.data.results;
          // Mostrar los cómics en la consola para propósitos de depuración
          console.log(value);
        },
        error: (err) => {
          // Manejar errores de la solicitud HTTP
          console.error(err);
        },
        complete: () => {
          // Log cuando la solicitud HTTP está completa
          console.log('complete');
        }
      }
    )
  }
}
