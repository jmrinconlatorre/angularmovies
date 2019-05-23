import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ApiMoviesService} from './api-movies.service';//añadimos el servicio a mano
import {HttpClientModule} from '@angular/common/http';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';//importamos http para hacer el fetch solo va a funcionar en chrome, no en android por ejemplo
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesCategoryComponent,
    MovieDetailComponent,
    NavigationComponent,
    MoviesDisplayComponent,
    MoviesSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
