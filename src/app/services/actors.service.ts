import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Constants from 'src/constant';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getActorsDetails(actorId: string) {
    return this.http.get(
      `${Constants.BASE_URL}/person/${actorId}?api_key=${
        Constants.API_KEY
      }&language=en-US`
    );
  }
  getActorsFilmographyDetails(actorId: string) {
    return this.http.get(
      `${Constants.BASE_URL}/person/${actorId}/movie_credits?api_key=${
        Constants.API_KEY
      }&language=en-US`
    );
  }
}
