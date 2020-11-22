import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiKey = '94cbadb7';
  private apiURL = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  GetMovies(name: string, type: string, page: string) {

    if (type == 'all') {
      return this.http.get(this.apiURL + '?apikey=' + this.apiKey + '&s=' + name + '&page=' + page);
    } else {
      return this.http.get(this.apiURL + '?apikey=' + this.apiKey + '&s=' + name + '&type=' + type + '&page=' + page);
    }

  }

  GetMovie(id: string) {

    return this.http.get(this.apiURL + '?apikey=' + this.apiKey + '&i=' + id);
  }
}