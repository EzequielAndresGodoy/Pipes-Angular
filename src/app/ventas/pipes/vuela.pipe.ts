import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform( vuela: boolean = false ): string {
    // if(Mayus) {
    //   return string.toUpperCase();
    // } else {
    //   return string.toLocaleLowerCase();
    // }
    return (vuela) ? 'sí' : 'no';
  }
}

