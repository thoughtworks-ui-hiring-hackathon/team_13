import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies:Observable<any>;
  constructor() {}

  ngOnInit() {}
}