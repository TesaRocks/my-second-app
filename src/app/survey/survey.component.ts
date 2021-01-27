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
  constructor(
    private sportService: SportService,
    private activateService: ActivateService
  ) {}

  ngOnInit(): void {
    this.surf = this.sportService.surf;
    this.kitesurf = this.sportService.kitesurf;
    this.windsurf = this.sportService.windsurf;
    this.sp = this.sportService.sportSelected;
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
