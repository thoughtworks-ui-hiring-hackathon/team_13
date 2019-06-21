import { Injectable } from '@angular/core';
import Constant from '../../constant';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';

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
      console.log(this.movieGenres);
    });
  }

  getLatestMovie() {
    return this.http.get(
      `${Constant.base_url}/movie/now_playing?api_key=${
        Constant.API_KEY
      }&language=en-US&include_adult=false`
    );
  }

  getTrendingMovie() {
    return this.http.get(
      `${Constant.base_url}/trending/movie/week?api_key=${Constant.API_KEY}`
    );
  }

  getMostWatchedMovie() {
    return this.http.get(
      `${Constant.base_url}/movie/popular?api_key=${
        Constant.API_KEY
      }&language=en-US&page=1`
    );
  }

  getMovieGenres() {
    return this.http.get(
      `${Constant.base_url}/genre/movie/list?api_key=${
        Constant.API_KEY
      }&language=en-US`
    );
  }
  getMovieDetails(movieId: string) {
    return this.http.get(
      `${Constant.base_url}/movie/${movieId}?api_key=${
        Constant.API_KEY
      }&language=en-US&append_to_response=credits`
    );
  }

  getSimilarMovie(movieId: string) {
    return this.http.get(
      `${Constant.base_url}/movie/${movieId}/similar?api_key=${
        Constant.API_KEY
      }&language=en-US&page=1`
    );
  }

  getMovieSearch(searchQuery: string) {
    return this.http.get(
      `${Constant.base_url}/search/multi?api_key=${
        Constant.API_KEY
      }&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );
  }
}
