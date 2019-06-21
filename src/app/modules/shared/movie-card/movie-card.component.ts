import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieCardComponent implements OnInit {
  constructor() {}
  @Input()
  movie: any;

  ngOnInit() {}
}
