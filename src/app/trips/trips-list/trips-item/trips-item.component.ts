import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../trips.model';
import { TripsService } from '../../trips.service';

@Component({
  selector: 'app-trips-item',
  templateUrl: './trips-item.component.html',
  styleUrls: ['./trips-item.component.css'],
})
export class TripsItemComponent implements OnInit {
  @Input() trip: Trip;
  @Input() ind: number;
  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {}
  onSelectItem() {
    this.tripsService.tripSelected.emit(this.trip);
  }
}
