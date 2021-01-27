import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ActivateService } from '../shared/activate.service';
import { DataStorageService } from '../shared/data-storage.service';
import { SportService } from '../shared/sport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  sportChosen: string;
  activate: boolean;
  authSub: Subscription;
  isAuthenticated = false;

  constructor(
    private sportService: SportService,
    private activeService: ActivateService,
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sportService.sportChosen.subscribe((sport: string) => {
      this.sportChosen = sport;
    });
    this.activeService.active.subscribe((act) => {
      this.activate = act;
    });
    this.authSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  onSave() {
    this.dataStorage.storeTrips();
  }
  onFetch() {
    this.dataStorage.fetchTrips().subscribe();
  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
