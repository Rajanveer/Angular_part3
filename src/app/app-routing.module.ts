import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoviesingleComponent } from './moviesingle/moviesingle.component';

const routes: Routes = [
  {path:'movies-list',component: MovieslistComponent},
  {path:'movie-single',component: MoviesingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
