import { EventEmitter, Injectable } from '@angular/core';
import { Trip } from './trips.model';
@Injectable({ providedIn: 'root' })
export class TripsService {
  tripSelected = new EventEmitter<Trip>();
  private trips: Trip[] = [
    new Trip(
      'Maui Hawaii',
      'Great for Surf',
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Makena_Beach%2C_Maui_Hawaii_%2845015180584%29.jpg'
    ),
    new Trip(
      'Matanzas Chile',
      'I love Windurfing',
      'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunset_Beach%2C_Oahu%2C_Hawaii%2C_USA5.jpg'
    ),
  ];
  getTrips() {
    return this.trips.slice();
  }
}
