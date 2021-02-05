import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackpackComponent } from './backpack.component';
import { BackpackEditComponent } from './backpack-edit/backpack-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BackpackComponent, BackpackEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: 'backpack',
        component: BackpackComponent,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
  ],
})
export class BackpackModule {}
