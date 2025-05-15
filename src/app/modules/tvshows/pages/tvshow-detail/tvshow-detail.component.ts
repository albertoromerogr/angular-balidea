import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TVShow } from '@models/tvshow.model';
import { TvshowService } from '@services/tvshow.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrl: './tvshow-detail.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class TvshowDetailComponent implements OnInit {
  tvShow!: TVShow;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private tvShowService: TvshowService,
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(take(1)).subscribe((params) => {
      const id = params.get('id') ?? '1';
      this.tvShowService.getTvShowById(id).subscribe({
        next: (tvShow) => {
          this.tvShow = tvShow;
        },
        error: (err) => {
          console.error(err);
          this.router.navigate(['/tvshows']);
        },
      });
    });
  }
}
