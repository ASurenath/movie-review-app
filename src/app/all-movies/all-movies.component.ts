import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit{
  searchKey: string = ""
  filter:string=""
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
}
