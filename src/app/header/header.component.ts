import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivateService } from '../shared/activate.service';
import { DataStorageService } from '../shared/data-storage.service';
import { SportService } from '../shared/sport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sportChosen: string;
  activate: boolean;

  constructor(
    private sportService: SportService,
    private activeService: ActivateService,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {
    this.sportService.sportChosen.subscribe((sport: string) => {
      this.sportChosen = sport;
    });
    this.activeService.active.subscribe((act) => {
      this.activate = act;
    });
  }
  onSave() {
    this.dataStorage.storeTrips();
  }
  onFetch() {
    this.dataStorage.fetchTrips().subscribe();
  }
}
