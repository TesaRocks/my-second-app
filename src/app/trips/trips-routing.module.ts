import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsDetailComponent } from './trips-detail/trips-detail.component';
import { TripsEditComponent } from './trips-edit/trips-edit.component';
import { TripsResolverService } from './trips-resolver.service';
import { TripsStartComponent } from './trips-start/trips-start.component';
import { TripsComponent } from './trips.component';
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
    canActivate: [AuthGuard],
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
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class TripsRoutingModule {}
