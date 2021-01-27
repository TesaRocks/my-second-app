import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface fillF {
  board: string;
  amount: number;
  items: { name: string; amount: 1 }[];
}
@Component({
  selector: 'app-trips-start',
  templateUrl: './trips-start.component.html',
  styleUrls: ['./trips-start.component.css'],
})
export class TripsStartComponent implements OnInit {
  fillMode = false;
  fillForm: FormGroup;
  @Output() formSub: fillF;
  name2 = 'add items here please';
  exitBefore = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let name = 'for example Al Merrick';

    this.fillForm = new FormGroup({
      board: new FormControl(name, Validators.required),
      amount: new FormControl(null, Validators.required),
      items: new FormArray([
        new FormGroup({
          name: new FormControl(this.name2, Validators.required),
          amount: new FormControl(null, Validators.required),
        }),
      ]),
    });
  }
  get controls() {
    return (<FormArray>this.fillForm.get('items')).controls;
  }
  onFill() {
    this.fillMode = true;
  }
  onSubmit() {
    this.formSub = this.fillForm.value;
  }
  onAdd() {
    (<FormArray>this.fillForm.get('items')).push(
      new FormGroup({
        name: new FormControl(this.name2, Validators.required),
        amount: new FormControl(null, Validators.required),
      })
    );
  }
  onCancel() {
    this.fillForm.reset();
    this.router.navigate(['/survey']);
  }
}
