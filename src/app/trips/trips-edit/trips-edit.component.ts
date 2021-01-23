import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips-edit',
  templateUrl: './trips-edit.component.html',
  styleUrls: ['./trips-edit.component.css'],
})
export class TripsEditComponent implements OnInit {
  id: number;
  editMode = false;
  tripForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private tripsService: TripsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param.id;
      this.editMode = param['id'] != null;
      this.initForm();
    });
  }
  onAddIem() {
    (<FormArray>this.tripForm.get('items')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl(),
      })
    );
  }
  private initForm() {
    let tripName = '';
    let tripImage = '';
    let tripDesc = '';
    let tripItems = new FormArray([]);
    if (this.editMode) {
      const trip = this.tripsService.getTrip(this.id);
      tripName = trip.name;
      tripImage = trip.imagePath;
      tripDesc = trip.description;
      if (trip.items) {
        for (let item of trip.items) {
          tripItems.push(
            new FormGroup({
              name: new FormControl(item.name),
              amount: new FormControl(item.amount),
            })
          );
        }
      }
    }
    this.tripForm = new FormGroup({
      name: new FormControl(tripName),
      imagePath: new FormControl(tripImage),
      description: new FormControl(tripDesc),
      items: tripItems,
    });
  }
  get controls() {
    return (<FormArray>this.tripForm.get('items')).controls;
  }
  onSubmit() {
    console.log(this.tripForm);
  }
}
