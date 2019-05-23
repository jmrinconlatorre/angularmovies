import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {
  moviesFound: object[] =[];
  query = '';//esta bindeado en el input del ngModel

  constructor(private api: ApiMoviesService) { }//inyectamos el servicio en el constructor, siempre en 

  ngOnInit() {
  }

search(){
  if(this.query){
    console.log(this.query);
    this.api.searchMovies(this.query).subscribe( (res:any) =>{
      console.log(res)
      this.moviesFound=res.results;
    })
  }
  else{
    this.moviesFound = [];
  }
   
}
}
