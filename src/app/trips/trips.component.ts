import { Component } from '@angular/core';
import { Trip } from './trips.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent {
  selectedTrip: Trip;

  onSel(trip: Trip) {
    this.selectedTrip = trip;
  }
}
