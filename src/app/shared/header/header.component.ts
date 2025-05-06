import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'MovieDB App';
  noUsedVariable = 'This variable is not used anywhere in the code';
  emptyFunction() {}
}
