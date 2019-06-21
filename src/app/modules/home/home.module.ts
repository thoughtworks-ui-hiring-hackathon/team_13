import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [DashboardComponent, MovieListComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule]
})
export class HomeModule {}
