import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allMovies: any[], searchKey: string): any[] {
    if(!allMovies||searchKey==""){
      return allMovies
    }
    else{
      return allMovies?.filter(i=>(i.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())))
    }
  }
}
