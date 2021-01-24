import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trip } from '../trips.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css'],
})
export class TripsListComponent implements OnInit, OnDestroy {
  trips: Trip[];
  tripSub: Subscription;
  @Output() indice = new EventEmitter<number>();
  constructor(
    private tripsService: TripsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tripSub = this.tripsService.tripsChanged.subscribe((list: Trip[]) => {
      this.trips = list;
    });
    this.trips = this.tripsService.getTrips();
  }
  onWarn2(ind: number) {
    this.indice.emit(ind + 1);
  }
  onNewTrip() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.tripSub.unsubscribe();
  }
}
