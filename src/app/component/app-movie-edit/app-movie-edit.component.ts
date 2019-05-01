import { Component, OnInit } from '@angular/core';

import { MovieService } from './../../service/movie.service';
import { Movie } from './../../models/movie.class';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './app-movie-edit.component.html',
  styleUrls: ['./app-movie-edit.component.css']
})
export class AppMovieEditComponent implements OnInit {

  constructor(private _MovieService: MovieService) { }

  ngOnInit() {
  }

  AddVideo(event, name:string ,link:string ,author:string ){
        let movie = new Movie(null, name,link,author);
        this._MovieService.addMovie(movie);
        event.preventDefault();
  }

}
