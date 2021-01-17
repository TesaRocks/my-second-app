import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css'],
})
export class BackpackComponent implements OnInit {
  items: Item[] = [new Item('boardshorts', 3), new Item('wax', 2)];
  constructor() {}

  ngOnInit(): void {}
}
