import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  newMovie: any = {
    name: "",
    image: "https://i.pinimg.com/736x/66/35/ee/6635eeacc06802a324286bb4e1acc4c3.jpg",
    tags: [],
  }
  tags: any = { Romantic: false, Comedy: false, Horror: false,Thriller:false }
  allTags:string[]=["Romantic","Comedy","Horror","Thriller"]
  constructor(private api: ApiService, private router: Router) { }
  getFile(e: any) {
    let file = e.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (e: any) => {
      console.log(e.target.result);
      this.newMovie.image = e.target.result
    }
  }
  addMovie() {
    this.api.postMovie(this.newMovie).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/admin')
        alert("new movie added successfully")
        this.newMovie = {
          name: "",
          image: "https://i.pinimg.com/736x/66/35/ee/6635eeacc06802a324286bb4e1acc4c3.jpg",
          tags: [],
        }
      },        // this.editAdminStatus = false

      error: (err: any) => {
        alert("Operation failed! Please try again later")
        console.log(err);
      }
    })
  }
  updateTagList(){
    this.newMovie.tags=[]
    for (let k of Object.keys(this.tags)) {
      if (this.tags[k]) {
        this.newMovie.tags.push(k)
      }
    }
    console.log(this.newMovie.tags);
  }

}
