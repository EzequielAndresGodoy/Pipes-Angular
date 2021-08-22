import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})


export class OrdenarComponent {

  Mayus: boolean = false;
  order: string = 'sin valor'
  heroes: Heroe[] = [
    {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  mayusculas() {
    this.Mayus = true;
  };

  minusculas() {
    this.Mayus = false
  };

  cambiarOrder(order:string) {
    this.order = order;
  };

}
