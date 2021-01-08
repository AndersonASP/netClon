import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-affiche-serie',
  templateUrl: './affiche-serie.component.html',
  styleUrls: ['./affiche-serie.component.css']
})
export class AfficheSerieComponent implements OnInit {

  series;
  results;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.series = this.serieService.getSeries()
    .subscribe(data => {
      this.series = data['results'];
    });
}
}
