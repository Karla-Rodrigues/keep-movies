import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  moviesList: Object;

  name: string = '';
  type: string = 'all';
  page: string = '1';


  nro: number = 1;

  start: number = 1;
  end: number = 10;

  totalPages: number;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {

    if (this.activatedRoute.snapshot.params.name != null && this.activatedRoute.snapshot.params.type != null) {

      this.name = this.activatedRoute.snapshot.params.name;
      this.type = this.activatedRoute.snapshot.params.type;
      this.page = this.activatedRoute.snapshot.params.page;

      this.nro = Number(this.page);
      this.start = (this.nro - 1) * 10 + 1;
      this.end = this.start + 9;

      this.AccessMovies();

      this.location.replaceState("/list");

    }

  }

  FetchMovies() {

    this.page = '1';
    this.start = 1;
    this.end = 10;

    this.AccessMovies();

  }

  NextPage() {

    this.nro = Number(this.page);
    this.nro++;
    this.page = String(this.nro);

    this.start += 10;
    this.end += 10;
    if (this.totalPages < this.end) {
      this.end = this.totalPages;
    }

    this.AccessMovies();

  }

  PreviousPage() {

    this.nro = Number(this.page);
    if (this.nro > 1) {
      this.nro--;
      this.page = String(this.nro);

      this.start -= 10;
      this.end -= 10;
    }

    this.AccessMovies();

  }

  AccessMovies() {

    this._http.GetMovies(this.name, this.type, this.page).subscribe(data => {
      this.moviesList = data;
    });

  }

}