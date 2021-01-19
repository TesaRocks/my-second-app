import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() warn = new EventEmitter<void>();
  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {}
  onSelectItem() {
    this.tripsService.tripSelected.emit(this.trip);
  }
  onWarn() {
    this.warn.emit();
  }
}
