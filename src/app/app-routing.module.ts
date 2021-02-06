import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VipPageComponent } from './vip/vip-page/vip-page.component';
import { VipComponent } from './vip/vip.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },

  { path: 'vip', component: VipComponent },
  { path: 'vipPage', component: VipPageComponent },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not Found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
