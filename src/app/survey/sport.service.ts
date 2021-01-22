import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SportService {
  sportChosen = new EventEmitter<string>();
  onSportChosen(sport: string) {
    this.sportChosen.emit(sport);
  }
}
