import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';


const routes: Routes = [//definimos las rutas, propiedad path y propiedad component
  {path:'movies/:category',component: MoviesCategoryComponent},
  {path:'movie/:id',component: MovieDetailComponent},
  {path: 'search/:query', component: MoviesSearchComponent},
  {path: 'search', component: MoviesSearchComponent},
  {path: '**', redirectTo: '/movies/popular', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
