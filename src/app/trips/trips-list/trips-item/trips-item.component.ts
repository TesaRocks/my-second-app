import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Trip } from '../../trips.model';

@Component({
  selector: 'app-trips-item',
  templateUrl: './trips-item.component.html',
  styleUrls: ['./trips-item.component.css'],
})
export class TripsItemComponent implements OnInit {
  @Input() trip: Trip;
  @Input() ind: number;
  @Output() tripSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onSelectItem() {
    this.tripSelected.emit();
  }
}
