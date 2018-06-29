import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(){
    //return [{"id":1,"name":"Death wish"}]
    //return this.http.get<IMovie[]>("http://rajanveerbrar.com/restapi/users?apikey=81dc9bdb52d04dc20036dbd8313ed055");
    return this.http.get<IMovie[]>("http://localhost:49979/api/movieinfoes?apikey=abcXYZ124");
  }

  getMovie(id){
    return this.http.get<IMovie[]>("http://localhost:49979/api/movieinfoes/"+id+"?apikey=abcXYZ124");
  }
}
