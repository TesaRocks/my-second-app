import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SportService {
  sportChosen = new EventEmitter<string>();
  surf = 0;
  kitesurf = 0;
  windsurf = 0;
}
