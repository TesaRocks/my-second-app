import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trips-edit',
  templateUrl: './trips-edit.component.html',
  styleUrls: ['./trips-edit.component.css'],
})
export class TripsEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param.id;
      this.editMode = param['id'] != null;
      // if(typeof this.id === 'number'){
      //   this.editMode = true;
      // }
    });
  }
}
