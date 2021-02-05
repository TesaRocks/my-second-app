import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { TripsDetailComponent } from './trips-detail/trips-detail.component';
import { TripsItemComponent } from './trips-list/trips-item/trips-item.component';
import { TripsStartComponent } from './trips-start/trips-start.component';
import { TripsEditComponent } from './trips-edit/trips-edit.component';
import { TripRaComponent } from './trips-start/trip-ra/trip-ra.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TripsComponent,
    TripsListComponent,
    TripsDetailComponent,
    TripsItemComponent,
    TripsStartComponent,
    TripsEditComponent,
    TripRaComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    TripsRoutingModule,
  ],
})
export class TripsModule {}
