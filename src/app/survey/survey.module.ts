import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SurveyComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SurveyComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard],
      },
    ]),
    SharedModule,
  ],
})
export class SurveyModule {}
