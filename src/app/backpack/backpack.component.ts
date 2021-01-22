import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivateService } from '../activate.service';

import { Item } from '../shared/item.model';
import { BackpackService } from './backpack.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css'],
})
export class BackpackComponent implements OnInit, OnDestroy {
  items: Item[];
  activate: boolean = false;
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
    this.activateService.active.subscribe((act) => {
      this.activate = act;
      console.log(this.activate);
    });
  }
  ngOnDestroy() {
    this.itemsUpdate.unsubscribe();
  }
}
