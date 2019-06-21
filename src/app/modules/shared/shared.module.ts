import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MovieCardComponent]
})
export class SharedModule {}
