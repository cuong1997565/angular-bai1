import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../service/movie.service';
import { Movie } from './../../models/movie.class';
@Component({
  selector: 'app-movie-list',
  templateUrl: './app-movie-list.component.html',
  styleUrls: ['./app-movie-list.component.css']
})
export class AppMovieListComponent implements OnInit {
  public movies : Movie[] = [];
  constructor(private _MovieService: MovieService) {
   }

  ngOnInit() {
    this.movies = this._MovieService.getAllMovie();
  }

}
