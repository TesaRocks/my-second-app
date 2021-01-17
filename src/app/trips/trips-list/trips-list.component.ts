import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Trip } from '../trips.model';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css'],
})
export class TripsListComponent implements OnInit {
  @Output() tripWasSelected = new EventEmitter<Trip>();
  trips: Trip[] = [
    new Trip(
      'Maui Super cool place',
      'Great for Surf',
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Makena_Beach%2C_Maui_Hawaii_%2845015180584%29.jpg'
    ),
    new Trip(
      'Matanzas',
      'I love Windurfing Chile',
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunset_Beach%2C_Oahu%2C_Hawaii%2C_USA5.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onTripSelected(trip: Trip) {
    this.tripWasSelected.emit(trip);
  }
}
