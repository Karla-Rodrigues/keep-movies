import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie: Object;
  name: string = this.activatedRoute.snapshot.params.name;
  type: string = this.activatedRoute.snapshot.params.type;
  page: string = this.activatedRoute.snapshot.params.page;
  id: string = this.activatedRoute.snapshot.params.id;

  constructor(private activatedRoute: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {

    this._http.GetMovie(this.id).subscribe(data => {
      this.movie = data;
    });

  }

}