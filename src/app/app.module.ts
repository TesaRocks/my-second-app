import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { TripsDetailComponent } from './trips/trips-detail/trips-detail.component';
import { TripsItemComponent } from './trips/trips-list/trips-item/trips-item.component';
import { BackpackComponent } from './backpack/backpack.component';
import { BackpackEditComponent } from './backpack/backpack-edit/backpack-edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    TripsListComponent,
    TripsDetailComponent,
    TripsItemComponent,
    BackpackComponent,
    BackpackEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
