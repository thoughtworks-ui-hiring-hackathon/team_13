import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class MovieCardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input()
  movie: any;

  ngOnInit() {
  }

  cardClick(data: any) {
    console.log(data);
    this.router.navigate(['/explore'], {
      queryParams: { id: data }
    })
  }

}
