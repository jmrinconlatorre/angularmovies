import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiMoviesService {
  apiBaseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '323112ea2281b9eb70f319f4df422c6b';

  constructor(private http: HttpClient) {}

  endpointCategory(cat) {
    return `${this.apiBaseUrl}movie/${cat}?api_key=${this.apiKey}`;
  }
  endpointMovie(id) {
    return `${this.apiBaseUrl}movie/${id}?api_key=${this.apiKey}`;
  }
  endpointSimilar(id) {
    return `${this.apiBaseUrl}movie/${id}/similar?api_key=${this.apiKey}`;
  }

  getCategory(cat) {
    let url = this.endpointCategory(cat);
    return this.http.get(url);
  }
  getMovie(id) {
    let url = this.endpointMovie(id);
    return this.http.get(url);
  }
  getSimilar(id) {
    let url = this.endpointSimilar(id);
    return this.http.get(url);
  }
}