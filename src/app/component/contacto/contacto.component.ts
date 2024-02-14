import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  seleccion(numero: number) {
    // Lógica para manejar la selección
  }
  
  terreno: number = 0; // Definición de la propiedad 'terreno'

  constructor() { }
}
