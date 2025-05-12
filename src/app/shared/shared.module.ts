import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingPipe } from './pipes/rating.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MediaCardComponent,
    SearchComponent,
    RatingPipe,
    TruncatePipe,
  ], // Que creo
  imports: [CommonModule, RouterModule, FormsModule], // Que necesitan mis componentes creados
  exports: [
    HeaderComponent,
    FooterComponent,
    MediaCardComponent,
    SearchComponent,
    RatingPipe,
    TruncatePipe,
  ], // Que componentes disponibilizo
  providers: [],
})
export class SharedModule {
  constructor() {
    console.log('Shared module initialized');
  }
}
