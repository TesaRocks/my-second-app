import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { TripsDetailComponent } from './trips/trips-detail/trips-detail.component';
import { TripsItemComponent } from './trips/trips-list/trips-item/trips-item.component';
import { TripsStartComponent } from './trips/trips-start/trips-start.component';
import { BackpackComponent } from './backpack/backpack.component';
import { BackpackEditComponent } from './backpack/backpack-edit/backpack-edit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './shared/basic-highlight.directive';
import { BestHighlightDirective } from './shared/best-highlight.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { DontClickDirective } from './shared/dontClick.directive';
import { TripsEditComponent } from './trips/trips-edit/trips-edit.component';
import { SurveyComponent } from './survey/survey.component';
import { ShortenPipe } from './shared/shorten.pipe';

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
    BasicHighlightDirective,
    BestHighlightDirective,
    DropdownDirective,
    DontClickDirective,
    TripsStartComponent,
    TripsEditComponent,
    SurveyComponent,
    ShortenPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
