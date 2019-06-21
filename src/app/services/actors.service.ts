import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Constant from 'src/constant';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getActorsDetails(actorId: string) {
    return this.http.get(
      `${Constant.BASE_URL}/person/${actorId}?api_key=${
        Constant.API_KEY
      }&language=en-US`
    );
  }
  getActorsFilmographyDetails(actorId: string) {
    return this.http.get(
      `${Constant.BASE_URL}/person/${actorId}/movie_credits?api_key=${
        Constant.API_KEY
      }&language=en-US`
    );
  }
}
