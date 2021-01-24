import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Trip } from '../trips.model';
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
    private tripsService: TripsService,
    private router: Router
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
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
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
              name: new FormControl(item.name, Validators.required),
              amount: new FormControl(item.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.tripForm = new FormGroup({
      name: new FormControl(tripName, Validators.required),
      imagePath: new FormControl(tripImage, Validators.required),
      description: new FormControl(tripDesc, Validators.required),
      items: tripItems,
    });
  }
  get controls() {
    return (<FormArray>this.tripForm.get('items')).controls;
  }
  onSubmit() {
    // const newTrip = new Trip(
    //   this.tripForm.value.name,
    //   this.tripForm.value.description,
    //   this.tripForm.value.imagePath,
    //   this.tripForm.value.items
    // );
    if (this.editMode) {
      this.tripsService.updateTrip(this.id, this.tripForm.value);
    } else {
      this.tripsService.addTrip(this.tripForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onX(index: number) {
    (<FormArray>this.tripForm.get('items')).removeAt(index);
  }
}
