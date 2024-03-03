import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-managemovies',
  templateUrl: './managemovies.component.html',
  styleUrls: ['./managemovies.component.css']
})
export class ManagemoviesComponent {
  allMovies: any[] = []
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getMovies()
  }
  getMovies(){
    this.api.getAllMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allMovies = res
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  deleteMovie(id:any){
    this.api.deleteMovie(id).subscribe(
      (res:any)=>{
        this.getMovies()
      }
    )
  }
}
