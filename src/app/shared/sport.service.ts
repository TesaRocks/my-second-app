import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SportService {
  sportChosen = new EventEmitter<string>();
  surf = 0;
  kitesurf = 0;
  windsurf = 0;
  sportSelected: string;
  constructor(private http: HttpClient) {}
  saveSport(sport: string) {
    this.http
      .post(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/sportChosen.json',
        JSON.stringify(sport)
      )
      .subscribe((item) => {
        console.log(item);
      });
  }
}
