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
      `${Constant.base_url}/person/${actorId}?api_key=${
        Constant.API_KEY
      }&language=en-US`
    );
  }
}
