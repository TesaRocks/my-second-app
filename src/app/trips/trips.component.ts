import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  index: number;

  constructor() {}

  ngOnInit() {}
  onWarn3(event: number) {
    this.index = event;
    if (event % 2 === 0) {
      alert('Forever WaterSports!');
    } else {
      alert('Magic brah!');
    }
  }
}
