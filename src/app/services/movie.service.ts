import { Injectable } from '@angular/core';
import { API_KEY, base_url} from '../../constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getLatestMovie(){
        return this.http.get(`${base_url}/movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false`);
    }

}