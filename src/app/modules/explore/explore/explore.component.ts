import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  movieDetails: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.movieDetails= this.movieService.getMovieDetails(id);
    });
  }

}
