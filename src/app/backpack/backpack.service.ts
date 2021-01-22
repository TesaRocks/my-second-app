import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';

@Injectable({ providedIn: 'root' })
export class BackpackService {
  itemsChanged = new Subject<Item[]>();
  private items: Item[] = [new Item('boardshorts', 3), new Item('wax', 2)];
  getItems() {
    return this.items.slice();
  }
  addItems(it: Item) {
    this.items.push(it);
    this.itemsChanged.next(this.items.slice());
  }
  addManyItems(item: Item[]) {
    this.items.push(...item);
    this.itemsChanged.next(this.items.slice());
  }
}
