import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackpackComponent } from './backpack/backpack.component';
import { SurveyComponent } from './survey/survey.component';
import { TripsDetailComponent } from './trips/trips-detail/trips-detail.component';
import { TripsEditComponent } from './trips/trips-edit/trips-edit.component';
import { TripsResolverService } from './trips/trips-resolver.service';
import { TripsStartComponent } from './trips/trips-start/trips-start.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  {
    path: 'trips',
    component: TripsComponent,
    children: [
      { path: '', component: TripsStartComponent },
      { path: 'new', component: TripsEditComponent },
      {
        path: ':id',
        component: TripsDetailComponent,
        resolve: [TripsResolverService],
      },
      {
        path: ':id/edit',
        component: TripsEditComponent,
        resolve: [TripsResolverService],
      },
    ],
  },
  { path: 'backpack', component: BackpackComponent },
  { path: 'survey', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
