import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BackpackService } from '../backpack/backpack.service';
import { Trip } from '../trips/trips.model';
import { TripsService } from '../trips/trips.service';
import { Item } from './item.model';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private tripsService: TripsService,
    private backpackService: BackpackService
  ) {}
  storeTrips() {
    const trips = this.tripsService.getTrips();
    this.http
      .put(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/trips.json',
        trips
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchTrips() {
    return this.http
      .get<Trip[]>(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/trips.json'
      )
      .pipe(
        map((trips) => {
          return trips.map((item) => {
            return { ...item, items: item.items ? item.items : [] };
          });
        }),
        tap((trips) => {
          this.tripsService.setTrips(trips);
        })
      );
  }
  storeItems() {
    const items = this.backpackService.getItems();
    this.http
      .put(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/items.json',
        items
      )
      .subscribe((it) => {
        console.log(it);
      });
  }
  // updateItems(){
  //   const item = this.
  //   this.http.post('https://my-second-app-9ade6-default-rtdb.firebaseio.com/items.json',
  //   item)
  // }
  fetchItems() {
    return this.http
      .get<Item[]>(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/items.json'
      )
      .pipe(
        tap((items) => {
          this.backpackService.setItems(items);
        })
      );
  }
}
