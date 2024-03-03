import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit{
  movieId=0
  movie: any = {}
  reviews:any[]=[]
  postStatus:boolean=false
  rating:any={
    value:0,
    count:0
  }
  newReview:any={
    author:"",
    rating:5,
    content:"",
  }
  constructor(private api: ApiService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      const { id } = res
      this.getMovie(id)
      this.getReviews(id)
      this.movieId=id
    })
  }
  getMovie(id:any){
    this.api.getMovie(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movie = res
      },
      error: (err: any) => {
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
  switchPostStatus(){
    this.postStatus=!this.postStatus
  }
  postReview(){
    if(this.newReview.author==""){
      this.newReview.author="Anonymous"
    }
    this.api.postReview({...this.newReview,movie:this.movieId}).subscribe({
      next:(res:any)=>{
        this.switchPostStatus()
        this.newReview={
          author:"",
          rating:5,
          content:"",
        }
        this.getReviews(this.movieId)
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
