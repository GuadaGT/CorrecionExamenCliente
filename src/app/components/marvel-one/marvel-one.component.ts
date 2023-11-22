import { Component, OnInit } from '@angular/core';
import { Marvel } from '../../common/MarvelAPI';
import { ActivatedRoute } from '@angular/router';
import { MarvelOneService } from '../../services/marvel-one.service';

@Component({
  selector: 'app-marvel-one',
  templateUrl: './marvel-one.component.html',
  styleUrls: ['./marvel-one.component.css']
})
export class MarvelOneComponent implements OnInit {
  // Objeto para almacenar la información de un cómic específico
  Comic: Marvel;

  // Constructor: inyección de ActivatedRoute y MarvelOneService
  constructor(
    private ar: ActivatedRoute,
    private marveloneService: MarvelOneService
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Cargar la información del cómic al iniciar el componente
    this.loadComic();
  }

  // Método privado para cargar la información de un cómic específico
  private loadComic() {
    // Obtener el ID del cómic de los parámetros de la ruta
    const id = this.ar.snapshot.params['id'];

    // Llamar al servicio para obtener información del cómic específico
    this.marveloneService.getComic(id).subscribe(
      {
        next: (value) => {
          // Asignar la información del cómic obtenida al objeto Comic
          this.Comic = value.data.results[0];
        },
        error: (err) => {
          // Manejar errores de la solicitud HTTP
          console.error(err);
        },
        complete: () => {
          // Log cuando la solicitud HTTP está completa
          console.log('Complete');
        }
      }
    )
  }
}
