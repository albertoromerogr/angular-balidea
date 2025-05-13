import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TVShow } from '@models/tvshow.model';

@Component({
  selector: 'app-add-tvshow-template',
  templateUrl: './add-tvshow-template.component.html',
  styleUrl: './add-tvshow-template.component.scss',
})
export class AddTvshowTemplateComponent {
  submitted: boolean = false;
  tvShow: TVShow = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    origin_country: [],
    original_language: '',
    original_name: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    first_air_date: '',
    name: 'Nombre',
    vote_average: 0,
    vote_count: 0,
  };

  onReset() {
    this.tvShow = {
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      origin_country: [],
      original_language: '',
      original_name: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      first_air_date: '',
      name: 'Nombre',
      vote_average: 0,
      vote_count: 0,
    };
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
  }
}
