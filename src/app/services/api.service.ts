import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
SERVER_URL:string='http://localhost:3000'
loginStatus:boolean=!!sessionStorage.getItem('adminDetails')
  constructor(private http:HttpClient) { }
  updateLoginStatus(){
    this.loginStatus=!!sessionStorage.getItem('adminDetails')
    console.log("Login Status",this.loginStatus);
  }
  getAllMovies(){
    return this.http.get(`${this.SERVER_URL}/movies`)
  }
  getMovie(id:any){
    return this.http.get(`${this.SERVER_URL}/movies/${id}`)
  }
  getMovieReviews(id:any){
    return this.http.get(`${this.SERVER_URL}/reviews?movie=${id}`)
  }
  postReview(body:any){
    return this.http.post(`${this.SERVER_URL}/reviews`,body)
  }
  getAdminDetails(){
    return this.http.get(`${this.SERVER_URL}/adminDetails`)
  }
  postMovie(body:any){
    return this.http.post(`${this.SERVER_URL}/movies`,body)
  }
  deleteMovie(id:any){
    return this.http.delete(`${this.SERVER_URL}/movies/${id}`)
  }
  deleteReview(id:any){
    return this.http.delete(`${this.SERVER_URL}/reviews/${id}`)
  }
  editMovie(id:any,body:any){
    return this.http.put(`${this.SERVER_URL}/movies/${id}`,body)
  }
}
