import { EventEmitter, Injectable } from '@angular/core';
import { Trip } from './trips.model';
@Injectable({ providedIn: 'root' })
export class TripsService {
  tripSelected = new EventEmitter<Trip>();
  private trips: Trip[] = [
    new Trip(
      'Maui Hawaii',
      'Great for WindSurf',
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Hookipa_Maui_Wind_Surfer_James_Brennan_Molokai_Hawaii_-_panoramio.jpg'
    ),
    new Trip(
      'Matanzas Chile',
      'I love Windurfing',
      'https://as01.epimg.net/chile/imagenes/2018/10/04/deportes_aventura/1538661639_456641_1538661860_noticia_normal.jpg'
    ),
  ];
  getTrips() {
    return this.trips.slice();
  }
}
