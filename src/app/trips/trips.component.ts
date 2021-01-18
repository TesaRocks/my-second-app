import { Component, OnInit } from '@angular/core';
import { Trip } from './trips.model';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  selectedTrip: Trip;
  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.tripsService.tripSelected.subscribe((tr: Trip) => {
      this.selectedTrip = tr;
    });
  }
}
