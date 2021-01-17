import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../trips.model';

@Component({
  selector: 'app-trips-detail',
  templateUrl: './trips-detail.component.html',
  styleUrls: ['./trips-detail.component.css'],
})
export class TripsDetailComponent implements OnInit {
  @Input() trip: Trip;

  constructor() {}

  ngOnInit(): void {}
}
