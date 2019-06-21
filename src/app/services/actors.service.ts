import { Injectable } from '@angular/core';
import Constant from '../../constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getActorsDetails(actorId: string) {
        return this.http.get(`${Constant.base_url}/person/${actorId}?api_key=${Constant.API_KEY}&language=en-US`);
    }
    getActorsFilmographyDetails(actorId: string) {
        return this.http.get(`${Constant.base_url}/person/${actorId}/movie_credits?api_key=${Constant.API_KEY}&language=en-US`);
    }
}