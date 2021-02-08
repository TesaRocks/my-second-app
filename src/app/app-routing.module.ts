import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VipPageComponent } from './vip/vip-page/vip-page.component';
import { VipComponent } from './vip/vip.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  {
    path: 'trips',
    loadChildren: () =>
      import('./trips/trips.module').then((m) => m.TripsModule),
  },
  {
    path: 'backpack',
    loadChildren: () =>
      import('./backpack/backpack.module').then((m) => m.BackpackModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./survey/survey.module').then((m) => m.SurveyModule),
  },

  { path: 'vip', component: VipComponent, canActivate: [AuthGuard] },
  { path: 'vipPage', component: VipPageComponent, canActivate: [AuthGuard] },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not Found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
