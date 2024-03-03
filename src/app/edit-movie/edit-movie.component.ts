import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit{
  movie: any = {
    name: "",
    image: "https://i.pinimg.com/736x/66/35/ee/6635eeacc06802a324286bb4e1acc4c3.jpg",
    tags: [],
  }
  reviews:any[]=[]
  rating:any={
    value:0,
    count:0
  }
  movieId:any=0
  tags: any = { Romantic: false, Comedy: false, Horror: false,Thriller:false }
  allTags:string[]=["Romantic","Comedy","Horror","Thriller"]
  constructor(private api: ApiService , private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      const { id } = res
      this.movieId=id
      this.getMovieDetails(id)
      this.getReviews(id)
    })
  }
  getFile(e: any) {
    let file = e.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (e: any) => {
      console.log(e.target.result);
      this.movie.image = e.target.result
    }
  }
  updateMovie() {
    this.api.editMovie(this.movieId,this.movie).subscribe({
      next: (res: any) => {
        alert("Movie updated successfully")
      },
      error: (err: any) => {
        alert("Operation failed! Please try again later")
        console.log(err);
      }
    })
  }
  updateTagList(){
    this.movie.tags=[]
    for (let k of Object.keys(this.tags)) {
      if (this.tags[k]) {
        this.movie.tags.push(k)
      }
    }
    console.log(this.movie.tags);
  }
  updateTags(){
    // this.movie.tags=[]
    for (let k of this.allTags) {
      if (this.movie.tags.includes(k)) {
        this.tags[k]=true
      }
      else{
        this.tags[k]=false
      }
    }
    console.log(this.movie.tags);
    console.log(this.tags);
    this.updateTagList()
  }
  getMovieDetails(id:number){
    this.api.getMovie(id).subscribe({
      next:(res:any) => {
        console.log(res);
        this.movie = res
        this.updateTags()
      },
      error:(err:any) => {
        console.log(err);
      }
    })
  }
  getReviews(id:any){
    this.api.getMovieReviews(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.reviews = res
        this.rating.count=res.length
if(this.rating.count!=0){        this.rating.value=(res.map((i:any)=>i.rating).reduce((a:number,b:number)=>a+b))/this.rating.count
}
else{
  this.rating.value=0
}
},
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  deleteReview(id:any){
    this.api.deleteReview(id).subscribe(
      (res:any)=>{
        this.getReviews(this.movieId)
      }
    )
  }
}
