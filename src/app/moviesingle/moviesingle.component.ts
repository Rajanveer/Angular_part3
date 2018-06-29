import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviesingle',
  templateUrl: './moviesingle.component.html',
  styleUrls: ['./moviesingle.component.css']
})
export class MoviesingleComponent implements OnInit {

  mov = [];
  id:number = 1;

  constructor(private _moviesService : MoviesService) { }

  ngOnInit() {
     //this._moviesService.getMovies().subscribe((data:any[]) => {  this.movies = data; });
     //console.log(this.movies);

     this.getMovie();
  }

  onNameKeyUp(event:any) {
    this.id = event.target.value;
  }

  getMovie(){
    if(this.id==0){
      alert("Oops! Enter a valid ID");
    } else {
      this._moviesService.getMovie(this.id).subscribe((data:any[]) => {  
          this.mov = data;
      });
    }
  }
}
