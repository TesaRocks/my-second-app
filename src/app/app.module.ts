import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VipComponent } from './vip/vip.component';
import { VipPageComponent } from './vip/vip-page/vip-page.component';
import { TripsModule } from './trips/trips.module';
import { BackpackModule } from './backpack/backpack.module';
import { SurveyModule } from './survey/survey.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    VipComponent,
    VipPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    SurveyModule,
    BackpackModule,
    TripsModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
