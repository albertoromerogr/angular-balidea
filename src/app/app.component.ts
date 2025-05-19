import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { SearchComponent } from '@shared/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-movies';
  selectedLang = 'en';
  name = 'ALBERTO';
  showName = true;
  surname = 'SURNAME';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.use(this.selectedLang);
  }

  onLangChange(lang: string) {
    this.selectedLang = lang;
    this.showName = !this.showName;
    this.translate.use(lang);
  }

  toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
  }
}
