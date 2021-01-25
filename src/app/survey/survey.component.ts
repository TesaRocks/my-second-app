import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../shared/activate.service';
import { SportService } from '../shared/sport.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  surf = 0;
  kitesurf = 0;
  windsurf = 0;
  sp: string;
  constructor(
    private sportService: SportService,
    private activateService: ActivateService
  ) {}

  ngOnInit(): void {
    this.surf = this.sportService.surf;
    this.kitesurf = this.sportService.kitesurf;
    this.windsurf = this.sportService.windsurf;
  }
  onActivate() {
    this.activateService.active.next(true);
    this.activateService.act = true;
  }
}
