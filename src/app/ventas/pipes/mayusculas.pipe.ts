import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayuscularPipe implements PipeTransform {


  transform( string:string, Mayus: boolean = true ): string {
    // if(Mayus) {
    //   return string.toUpperCase();
    // } else {
    //   return string.toLocaleLowerCase();
    // }
    return (Mayus) ? string.toUpperCase() : string.toLocaleLowerCase();
  }
}

