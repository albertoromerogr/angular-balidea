import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvshowListComponent } from './pages/tvshow-list/tvshow-list.component';
import { TvshowDetailComponent } from './pages/tvshow-detail/tvshow-detail.component';
import { AddTvshowTemplateComponent } from './add-tvshow-template/add-tvshow-template.component';

const routes: Routes = [
  { path: '', component: TvshowListComponent },
  { path: 'add', component: AddTvshowTemplateComponent },
  { path: ':id', component: TvshowDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsRoutingModule {}
