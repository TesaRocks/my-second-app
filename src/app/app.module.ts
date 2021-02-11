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
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { StoreModule } from '@ngrx/store';
import { backpackReducer } from './backpack/store/backpack.reducer';

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
    StoreModule.forRoot({ backpack: backpackReducer }),
    CoreModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [LoggingService],

  bootstrap: [AppComponent],
})
export class AppModule {}
