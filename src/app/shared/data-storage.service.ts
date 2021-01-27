import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { Trip } from '../trips/trips.model';
import { TripsService } from '../trips/trips.service';
import { AuthService } from '../auth/auth.service';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private tripsService: TripsService,
    private authService: AuthService
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
    this.authService.user.pipe(take(1)).subscribe((user) => {});
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
}
