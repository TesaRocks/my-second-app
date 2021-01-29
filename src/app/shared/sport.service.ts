import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class SportService {
  sportChosen = new EventEmitter<string>();
  sportSelected: string;
  constructor(private http: HttpClient) {}
  saveSport(sport: string) {
    this.http
      .post(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/sportChosen.json',
        JSON.stringify(sport)
      )
      .subscribe();
  }
  getSport() {
    return this.http
      .get(
        'https://my-second-app-9ade6-default-rtdb.firebaseio.com/sportChosen.json'
      )
      .pipe(
        map((item) => {
          const spArr = Object.values(item);
          return spArr;
        })
      );
  }
}
