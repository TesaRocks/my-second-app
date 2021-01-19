import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loeadeFeature = 'trip';
  in: number;
  sportSelected: string;
  onNavigate(feature: string) {
    this.loeadeFeature = feature;
  }
  toBB(event: number) {
    this.in = event;
  }
  onSp(sp: string) {
    this.sportSelected = sp;
  }
}
