import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule,SharedModule]
})
export class ExploreModule {}
