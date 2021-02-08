import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { ActivateService } from '../shared/activate.service';
import { DataStorageService } from '../shared/data-storage.service';

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
  getData: Subscription;

  constructor(
    private backpackService: BackpackService,
    private activateService: ActivateService,
    private dataStorageService: DataStorageService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.getData = this.dataStorageService.fetchItems().subscribe((it) => {
      console.log(it);
    });
    this.items = this.backpackService.getItems();
    this.itemsUpdate = this.backpackService.itemsChanged.subscribe(
      (item: Item[]) => {
        this.items = item;
      }
    );
    this.activate = this.activateService.act;
    this.loggingService.printLog('Hello from ngonit Backpack component');
  }
  onEditItem(id: number) {
    this.backpackService.editItem.next(id);
  }
  ngOnDestroy() {
    this.itemsUpdate.unsubscribe();
    this.getData.unsubscribe();
  }
}
