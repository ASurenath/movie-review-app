import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ManagemoviesComponent } from './managemovies/managemovies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:AllMoviesComponent},
  {path:'movie/:id',component:ViewMovieComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'admin',canActivate:[authGuard],component:ManagemoviesComponent},
  {path:'edit/:id',canActivate:[authGuard],component:EditMovieComponent},
  {path:'admin/add',canActivate:[authGuard],component:AddMovieComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
