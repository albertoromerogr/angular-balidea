import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-movies';
  suscription!: Subscription;

  constructor(private moviesService: MovieService) {}

  ngOnInit() {
    this.suscription = this.moviesService.getPopularMovies().subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
