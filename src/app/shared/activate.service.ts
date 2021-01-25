import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActivateService {
  active = new Subject<boolean>();
  act: boolean;
}
