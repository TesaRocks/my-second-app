import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trip } from '../../trips.model';

@Component({
  selector: 'app-trips-item',
  templateUrl: './trips-item.component.html',
  styleUrls: ['./trips-item.component.css'],
})
export class TripsItemComponent implements OnInit {
  @Input() trip: Trip;
  @Input() ind: number;
  @Output() warn = new EventEmitter<void>();

  ngOnInit(): void {}

  onWarn() {
    this.warn.emit();
  }
}
