import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManagemoviesComponent } from './managemovies/managemovies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ManageReviewsComponent } from './manage-reviews/manage-reviews.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular';
// import { IgcFormsModule } from 'igniteui-angular';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    HeaderComponent,
    FooterComponent,
    ViewMovieComponent,
    AdminLoginComponent,
    ManagemoviesComponent,
    EditMovieComponent,
    AddMovieComponent,
    ManageReviewsComponent,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    IgcFormControlDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
}
