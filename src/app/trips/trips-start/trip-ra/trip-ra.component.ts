import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fillF } from '../trips-start.component';
@Component({
  selector: 'app-trip-ra',
  templateUrl: './trip-ra.component.html',
  styleUrls: ['./trip-ra.component.css'],
})
export class TripRaComponent implements OnInit {
  @Output() fill = new EventEmitter<void>();
  fillStatus = false;
  @Input() formsub: fillF;

  constructor() {}

  ngOnInit(): void {}
  onForm() {
    this.fill.emit();
    this.fillStatus = true;
  }
}
