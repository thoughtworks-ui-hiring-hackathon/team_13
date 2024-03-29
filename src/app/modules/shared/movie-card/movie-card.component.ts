import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieCardComponent implements OnInit {
  constructor(private router: Router) {}
  @Input()
  movie: Movie;

  ngOnInit() {}

  cardClick(data: any) {
    this.router.navigate(['/explore'], {
      queryParams: { id: data }
    });
  }
}
