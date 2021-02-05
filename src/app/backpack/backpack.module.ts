import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackpackComponent } from './backpack.component';
import { BackpackEditComponent } from './backpack-edit/backpack-edit.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [BackpackComponent, BackpackEditComponent],
  imports: [
    RouterModule,
    CommonModule,
    //ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'backpack',
        component: BackpackComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class BackpackModule {}
