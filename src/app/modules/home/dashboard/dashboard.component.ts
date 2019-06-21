import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  latestMovieData: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 1', cols: 1, rows: 1 }];
      }

      return [{ title: 'Card 1', cols: 2, rows: 1 }];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private movieService: MovieService, private router: Router
  ) { }

  ngOnInit() {
    this.movieService.getLatestMovie().subscribe((data: any) => {
      this.latestMovieData = data.results;
      console.log(this.latestMovieData);
    });
  }
  cardClick(data: any) {
    console.log(data);
    this.router.navigate(['/explore'], {
      queryParams: { id: data.id }
    })
  }
}
