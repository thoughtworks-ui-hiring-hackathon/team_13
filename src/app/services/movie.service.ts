import { Injectable } from '@angular/core';
import Constants from '../../constant';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieGenres: Genre[] = [];
  constructor(private http: HttpClient) {
    this.setUpMovieData();
  }

  setUpMovieData() {
    this.getMovieGenres().subscribe((result: any) => {
      this.movieGenres = result.genres;
    });
  }

  getLatestMovie() {
    return this.http
      .get(
        `${Constants.BASE_URL}/movie/now_playing?api_key=${
          Constants.API_KEY
        }&language=en-US&include_adult=false`
      )
      .pipe(
        map((result: any) => {
          return result.results;
        })
      );
  }

  getTrendingMovie() {
    return this.http
      .get(
        `${Constants.BASE_URL}/trending/movie/week?api_key=${Constants.API_KEY}`
      )
      .pipe(
        map((result: any) => {
          return result.results;
        })
      );
  }

  getMostWatchedMovie() {
    return this.http
      .get(
        `${Constants.BASE_URL}/movie/popular?api_key=${
          Constants.API_KEY
        }&language=en-US&page=1`
      )
      .pipe(
        map((result: any) => {
          return result.results;
        })
      );
  }

  getMovieGenres() {
    return this.http.get(
      `${Constants.BASE_URL}/genre/movie/list?api_key=${
        Constants.API_KEY
      }&language=en-US`
    );
  }
  getMovieDetails(movieId: string) {
    return this.http.get(
      `${Constants.BASE_URL}/movie/${movieId}?api_key=${
        Constants.API_KEY
      }&language=en-US&append_to_response=credits`
    );
  }

  getSimilarMovie(movieId: string) {
    return this.http.get(
      `${Constants.BASE_URL}/movie/${movieId}/similar?api_key=${
        Constants.API_KEY
      }&language=en-US&page=1`
    );
  }

  getMovieSearch(searchQuery: string) {
    return this.http.get(
      `${Constants.BASE_URL}/search/multi?api_key=${
        Constants.API_KEY
      }&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
  }
}
