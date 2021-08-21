import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = 'ezequiel'
  nombreUpper: string = 'EZEQUIEL'
  nombreCompleto: string = 'EzEquIEL GoDOY'

  fecha: Date = new Date() // el dia de hoy

}
