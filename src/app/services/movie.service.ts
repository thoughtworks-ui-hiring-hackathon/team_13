import { Injectable } from '@angular/core';
import Constant from '../../constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getLatestMovie(){
        return this.http.get(`${Constant.base_url}/movie/now_playing?api_key=${Constant.API_KEY}&language=en-US&include_adult=false`);
    }

    getTrendingMovie(){
        return this.http.get(`${Constant.base_url}/trending/movie/week?api_key=${Constant.API_KEY}`);
    }

    getMostWatchedMovie(){
        return this.http.get(`${Constant.base_url}/movie/popular?api_key=${Constant.API_KEY}&language=en-US&page=1`);
    }

    getMovieGenres(){
        return this.http.get(`${Constant.base_url}/genre/movie/list?api_key=${Constant.API_KEY}&language=en-US`);    
    }

    getSimilarMovie(movieId: string){
        return this.http.get(`${Constant.base_url}/movie/${movieId}/similar?api_key=${Constant.API_KEY}&language=en-US&page=1`);    
    }

    getMovieSearch(searchQuery: string){
        return this.http.get(`${Constant.base_url}/search/multi?api_key=${Constant.API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);    
    }



}