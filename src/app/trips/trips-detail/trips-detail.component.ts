import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
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
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService
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
  onEditTrip() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  onDelete() {
    this.tripsService.deleteTrip(this.id);
    this.router.navigate(['/']);
  }
}
