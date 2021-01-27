import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.errorMessage = this.route.snapshot.data.message;
    this.route.data.subscribe((mes) => {
      this.errorMessage = mes.message;
    });
  }
}
