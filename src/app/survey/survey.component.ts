import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../shared/activate.service';
import { SportService } from '../shared/sport.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../shared/can-deactivate-guard.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit, CanComponentDeactivate {
  surf = 0;
  kitesurf = 0;
  windsurf = 0;
  sp: string;
  activeStatus = false;
  isLoading = false;
  constructor(
    private sportService: SportService,
    private activateService: ActivateService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.sp = this.sportService.sportSelected;
    this.activeStatus = this.activateService.act;
    this.sportService.getSport().subscribe((sp: string[]) => {
      let sporLen = sp.length;
      for (let sport of sp) {
        if (sport === 'surf') {
          this.surf++;
        } else if (sport === 'kitesurf') {
          this.kitesurf++;
        } else if (sport === 'windsurf') {
          this.windsurf++;
        }
      }
      this.surf = parseFloat(((this.surf / sporLen) * 100).toFixed(1));
      this.kitesurf = parseFloat(((this.kitesurf / sporLen) * 100).toFixed(1));
      this.windsurf = parseFloat(((this.windsurf / sporLen) * 100).toFixed(1));

      this.isLoading = false;
    });
  }
  onActivate() {
    this.activateService.active.next(true);
    this.activeStatus = true;
    this.activateService.act = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.activeStatus) {
      alert('Please read our disclaimer before leaving');
    } else {
      return true;
    }
  }
}
