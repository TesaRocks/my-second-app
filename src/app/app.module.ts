import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './shared/basic-highlight.directive';
import { BestHighlightDirective } from './shared/best-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { DontClickDirective } from './shared/dontClick.directive';
import { SurveyComponent } from './survey/survey.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { VipComponent } from './vip/vip.component';
import { VipPageComponent } from './vip/vip-page/vip-page.component';
import { Loading2SpinnerComponent } from './shared/loading-spinner/loading2-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { TripsModule } from './trips/trips.module';
import { BackpackModule } from './backpack/backpack.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BestHighlightDirective,
    DropdownDirective,
    DontClickDirective,
    SurveyComponent,
    ShortenPipe,
    PageNotFoundComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    VipComponent,
    VipPageComponent,
    Loading2SpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BackpackModule,
    TripsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
