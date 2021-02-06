import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

NgModule({
  providers: [
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
});
export class CoreModule {}
