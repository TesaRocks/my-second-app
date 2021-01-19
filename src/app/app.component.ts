import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loeadeFeature = 'trip';
  in: number;
  onNavigate(feature: string) {
    this.loeadeFeature = feature;
  }
  toBB(event: number) {
    this.in = event;
  }
}
