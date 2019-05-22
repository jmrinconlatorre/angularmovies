import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  
    constructor( private http: HttpClient) {}
  
    getCategory(cat) {
      let url = `https://api.themoviedb.org/3/movie/${cat}?api_key=323112ea2281b9eb70f319f4df422c6b`;  
      return this.http.get(url);
    }
  }

