import { Component, OnInit } from '@angular/core';
import { SportService } from '../survey/sport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sportChosen: string;
  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportService.sportChosen.subscribe((sport: string) => {
      this.sportChosen = sport;
    });
  }
}
