import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivateService } from '../shared/activate.service';

import { Item } from '../shared/item.model';
import { BackpackService } from './backpack.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css'],
})
export class BackpackComponent implements OnInit, OnDestroy {
  items: Item[];
  activate: boolean;
  itemsUpdate: Subscription;

  constructor(
    private backpackService: BackpackService,
    private activateService: ActivateService
  ) {}

  ngOnInit(): void {
    this.items = this.backpackService.getItems();
    this.itemsUpdate = this.backpackService.itemsChanged.subscribe(
      (item: Item[]) => {
        this.items = item;
      }
    );
    this.activate = this.activateService.act;
  }
  onEditItem(id: number) {
    this.backpackService.editItem.next(id);
  }
  ngOnDestroy() {
    this.itemsUpdate.unsubscribe();
  }
}
