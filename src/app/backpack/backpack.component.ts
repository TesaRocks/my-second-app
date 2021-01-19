import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shared/item.model';
import { BackpackService } from './backpack.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css'],
})
export class BackpackComponent implements OnInit {
  items: Item[];
  sportChosen: string;
  @Input() indice: number;
  @Output() sport = new EventEmitter<string>();
  constructor(private backpackService: BackpackService) {}

  ngOnInit(): void {
    this.items = this.backpackService.getItems();
    this.backpackService.itemsChanged.subscribe((item: Item[]) => {
      this.items = item;
    });
  }
  onSport(sport: string) {
    this.sportChosen = sport;
    this.sport.emit(sport);
  }
}
