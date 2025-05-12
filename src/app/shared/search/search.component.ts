import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchString!: string;

  onSearch($event: Event) {
    console.log($event);

    console.log(this.searchString);

    this.searchString = '';
  }
}
