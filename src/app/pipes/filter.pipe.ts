import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(allMovies: any[], filter: string): any[] {
    if (!allMovies || filter == "") {
      return allMovies
    }
    else {
      return allMovies?.filter((i:any) =>i.tags.includes(filter) )
    }
  }
}
