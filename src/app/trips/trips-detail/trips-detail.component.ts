import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../trips.model';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-detail',
  templateUrl: './trips-detail.component.html',
  styleUrls: ['./trips-detail.component.css'],
})
export class TripsDetailComponent implements OnInit {
  @Input() trip: Trip;

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {}
  onAdd() {
    this.tripsService.addItemToBackpack(this.trip.items);
  }
}
