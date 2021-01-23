import { Injectable } from '@angular/core';
import { BackpackService } from '../backpack/backpack.service';
import { Item } from '../shared/item.model';
import { Trip } from './trips.model';
@Injectable({ providedIn: 'root' })
export class TripsService {
  private trips: Trip[] = [
    new Trip(
      'Maui Hawaii',
      'Great for WindSurf',
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Hookipa_Maui_Wind_Surfer_James_Brennan_Molokai_Hawaii_-_panoramio.jpg',
      [new Item('sail', 2), new Item('boom', 1), new Item('fins', 3)]
    ),
    new Trip(
      'Matanzas Chile',
      'Windurfing Galore',
      'https://as01.epimg.net/chile/imagenes/2018/10/04/deportes_aventura/1538661639_456641_1538661860_noticia_normal.jpg',
      [new Item('board', 1), new Item('mast', 1)]
    ),
  ];
  constructor(private backpackService: BackpackService) {}
  getTrips() {
    return this.trips.slice();
  }
  addItemToBackpack(item: Item[]) {
    this.backpackService.addManyItems(item);
  }
  getTrip(id: number) {
    return this.trips[id];
  }
}
