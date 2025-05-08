import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MediaCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, MediaCardComponent],
  providers: [],
})
export class SharedModule {
  constructor() {
    console.log('Shared module initialized');
  }
}
