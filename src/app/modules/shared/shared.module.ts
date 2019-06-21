import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from 'src/app/material.module';
import { RatingComponent } from './rating/rating.component';
import { GenrePipe } from './pipes/genre.pipe';
import { RatingPipe } from './pipes/rating.pipe';

@NgModule({
  declarations: [MovieCardComponent, RatingComponent, GenrePipe, RatingPipe],
  imports: [CommonModule, MaterialModule],
  exports: [MovieCardComponent, RatingComponent]
})
export class SharedModule {}
