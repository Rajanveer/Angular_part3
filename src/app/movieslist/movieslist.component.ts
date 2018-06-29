import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

    movies = [];
  
    constructor(private _moviesService : MoviesService) { }
  
    ngOnInit() {
      this._moviesService.getMovies().subscribe((data:any[]) => { 
         this.movies = data;
         console.log(this.movies);

      });
      
    }
  

}
