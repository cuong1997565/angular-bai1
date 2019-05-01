import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.class';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies : Movie[] = [
    new Movie(1,'cương nguyễn','google.com','ưe'),
    new Movie(2,'nhung nhim','nhing.com','ưe123'),
    new Movie(3,'van','van.com','ưe123')
  ];
  constructor() { }
  getAllMovie ()
  {
      return this.movies;
  }

  addMovie(movie: Movie)
  {
    movie.id = this.getLastId(this.movies);
    this.movies.push(movie);
  }

  getLastId (movies) {
    let lastId = movies.length >0 ? movies.sort((a,b) => {
        if(a.id > b.id ) return -1;
        else if (a.id < b.id) return 1;
        else return 0;
    })[0].id + 1 : 1;
    return lastId;

  }
}
