import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Trip } from '../trips.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-detail',
  templateUrl: './trips-detail.component.html',
  styleUrls: ['./trips-detail.component.css'],
})
export class TripsDetailComponent implements OnInit {
  trip: Trip;

  id: number;

  constructor(
    private tripsService: TripsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.trip = this.tripsService.getTrip(this.id);
    });
  }
  onAdd() {
    this.tripsService.addItemToBackpack(this.trip.items);
  }
}
