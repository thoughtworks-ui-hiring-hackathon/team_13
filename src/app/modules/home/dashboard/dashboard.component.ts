import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  latestMovieData: Observable<Movie[]>;
  trendingMovieData: Observable<Movie[]>;
  mostWatchedMovieData: Observable<Movie[]>;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      const views = this.getViews();
      if (matches) {
        return views;
      }

      return views;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private movieService: MovieService
  ) {}

  private getViews() {
    return [
      {
        title: 'Latest',
        cols: 1,
        rows: 1,
        movieList: this.latestMovieData
      },
      {
        title: 'Trending',
        cols: 1,
        rows: 1,
        movieList: this.trendingMovieData
      },
      {
        title: 'Most Watched',
        cols: 1,
        rows: 1,
        movieList: this.mostWatchedMovieData
      }
    ];
  }

  ngOnInit() {
    this.latestMovieData = this.movieService.getLatestMovie();
    this.trendingMovieData = this.movieService.getTrendingMovie();
    this.mostWatchedMovieData = this.movieService.getMostWatchedMovie();
  }
}
