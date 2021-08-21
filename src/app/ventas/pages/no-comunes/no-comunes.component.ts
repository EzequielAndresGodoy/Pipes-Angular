import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{
  //i18nSelect
  listNombre: Array<any> = [['Ezequiel','masculino'],['Julia','femenino'],['Marcos','masculino'],['Laura','femenino'],['Esteban','masculino'],['Martina','femenino']];
  pN: number = 0;
  pG: number = 1;
  clicks: number = 0
  nombre: string = this.listNombre[0][this.pN]
  genero: string = this.listNombre[0][this.pG];
  

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  };

  cambiarCliente() {
    if (this.clicks === this.listNombre.length-1) {
      this.clicks = -1
    }
    this.clicks += 1
    this.nombre  = this.listNombre[this.clicks][this.pN]
    this.genero  = this.listNombre[this.clicks][this.pG]
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan',"Marcos","Julieta"];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  despacharCliente(){
    this.clientes.shift()
  }

  //Key Value Pipe
  persona = {
    nombre: 'Ezequiel',
    edad: 24,
    direccion: 'Argentina, Santa Fe'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Linterna Verde',
      vuela: true
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ]

  //Async Pipe

  miObservable = interval(1000); //0,1,2,3,4,5,6,7,8,9.......

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  });


}
