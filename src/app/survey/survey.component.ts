import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../activate.service';
import { SportService } from '../sport.service';

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
    this.sportService.sportChosen.subscribe((sport: string) => {
      this.sp = sport;

      // if (sport === 'surf') {
      //   this.surf++;
      // } else {
      //   if (sport === 'kitesurf') {
      //     this.kitesurf++;
      //   } else {
      //     if (sport === 'windsurf') {
      //       this.windsurf++;
      //     }
      //   }
      // }
    });
  }
  onActivate() {
    this.activateService.active.next(true);
  }
}
