import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Trip } from './trips.model';
import { TripsService } from './trips.service';

@Injectable({ providedIn: 'root' })
export class TripsResolverService implements Resolve<Trip[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private tripsService: TripsService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const trips = this.tripsService.getTrips();
    if (trips.length === 0) {
      return this.dataStorageService.fetchTrips();
    } else {
      return trips;
    }
  }
}
