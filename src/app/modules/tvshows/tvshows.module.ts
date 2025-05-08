import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TvShowsRoutingModule } from './tvshows.routing.module';
import { TvshowListComponent } from './pages/tvshow-list/tvshow-list.component';
import { TvshowDetailComponent } from './pages/tvshow-detail/tvshow-detail.component';
@NgModule({
  declarations: [TvshowListComponent, TvshowDetailComponent],
  imports: [CommonModule, TvShowsRoutingModule, SharedModule],
})
export class TvshowsModule {}
