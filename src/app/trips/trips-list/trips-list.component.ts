import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../trips.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css'],
})
export class TripsListComponent implements OnInit {
  trips: Trip[];
  @Output() indice = new EventEmitter<number>();
  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.trips = this.tripsService.getTrips();
  }
  onWarn2(ind: number) {
    this.indice.emit(ind);
  }
}
