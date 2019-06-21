import { Pipe, PipeTransform } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Genre } from 'src/app/models/genre';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  constructor(private movieService: MovieService) {}

  transform(value: any, args?: any): any {
    let result = '';
    this.movieService.movieGenres.forEach((genre: Genre) => {
      if (value.indexOf(genre.id) > -1) {
        result += genre.name;
      }
    });
    return result;
  }
}
