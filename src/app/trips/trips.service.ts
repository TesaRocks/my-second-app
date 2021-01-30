import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackpackService } from '../backpack/backpack.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Item } from '../shared/item.model';
import { Trip } from './trips.model';
@Injectable({ providedIn: 'root' })
export class TripsService {
  tripsChanged = new Subject<Trip[]>();
  // private trips: Trip[] = [
  //   new Trip(
  //     'Maui Hawaii',
  //     'Great for Surf',
  //     'https://c.pxhere.com/photos/99/c7/hawaii_wave_maui_surfing_surfboard_pacificisland_pacificislands_sonyalpha-172640.jpg!d',
  //     [new Item('surfboard', 2), new Item('gun', 1), new Item('fins', 3)]
  //   ),
  //   new Trip(
  //     'Matanzas Chile',
  //     'Windurfing Galore',
  //     'https://as01.epimg.net/chile/imagenes/2018/10/04/deportes_aventura/1538661639_456641_1538661860_noticia_normal.jpg',
  //     [new Item('board', 1), new Item('mast', 1)]
  //   ),
  // ];
  private trips: Trip[] = [];
  constructor(private backpackService: BackpackService) {}
  setTrips(trips: Trip[]) {
    this.trips = trips;
    this.tripsChanged.next(this.trips.slice());
  }
  getTrips() {
    return this.trips.slice();
  }
  addItemToBackpack(item: Item[]) {
    this.backpackService.addManyItems(item);
  }
  getTrip(id: number) {
    return this.trips[id];
  }
  addTrip(trip: Trip) {
    this.trips.push(trip);
    this.tripsChanged.next(this.trips.slice());
  }
  updateTrip(index: number, newtrip: Trip) {
    this.trips[index] = newtrip;
    this.tripsChanged.next(this.trips.slice());
  }
  deleteTrip(index: number) {
    this.trips.splice(index, 1);
    this.tripsChanged.next(this.trips.slice());
  }
}
