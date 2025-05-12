import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvshowListComponent } from './pages/tvshow-list/tvshow-list.component';
import { TvshowDetailComponent } from './pages/tvshow-detail/tvshow-detail.component';

const routes: Routes = [
  { path: '', component: TvshowListComponent },
  { path: ':id', component: TvshowDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}
