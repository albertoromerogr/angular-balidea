import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noSpoilersValidation } from '@shared/validations/spoiler.validation';

@Component({
  selector: 'app-add-movie-reactive',
  templateUrl: './add-movie-reactive.component.html',
  styleUrl: './add-movie-reactive.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AddMovieReactiveComponent {
  movieForm!: FormGroup<{
    title: FormControl<string>;
    overview: FormControl<string>;
    release_date: FormControl<string>;
    original_language: FormControl<string>;
    vote_average: FormControl<number>;
    genre_ids: FormControl<number[]>;
    poster_path: FormControl<string>;
    adult: FormControl<boolean>;
  }>;
  movieReset = {
    title: 'Nombre',
    overview: '',
    release_date: '',
    original_language: '',
    vote_average: 0,
    genre_ids: [0],
    poster_path: '',
    adult: false,
  };

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.nonNullable.group({
      title: ['Nombre', [Validators.required, Validators.minLength(2)]],
      overview: ['', noSpoilersValidation()],
      release_date: ['', Validators.required],
      original_language: [''],
      vote_average: [0, [Validators.min(0), Validators.max(10)]],
      genre_ids: [[0]],
      poster_path: [''],
      adult: [false],
    });
  }

  onReset() {
    this.movieForm.setValue(this.movieReset);
  }

  onSubmit() {
    console.log(this.movieForm);
  }
}
