import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from './trips.model';
import { TripsService } from './trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  selectedTrip: Trip;
  index: number;
  @Input() sportSelection: string;
  @Output() toB = new EventEmitter<number>();
  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.tripsService.tripSelected.subscribe((tr: Trip) => {
      this.selectedTrip = tr;
    });
  }
  onWarn3(event: number) {
    this.index = event;
    this.toB.emit(event);
  }
}
