import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class SearchComponent {
  searchString!: string;

  onSearch($event: Event) {
    console.log($event);

    console.log(this.searchString);

    this.searchString = '';
  }
}
