import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../shared/item.model';

@Injectable({ providedIn: 'root' })
export class BackpackService {
  itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [new Item('boardshorts', 3), new Item('wax', 2)];
  getItems() {
    return this.items.slice();
  }
  addItems(it: Item) {
    this.items.push(it);
    this.itemsChanged.emit(this.items.slice());
  }
  addManyItems(item: Item[]) {
    this.items.push(...item);
    this.itemsChanged.emit(this.items.slice());
  }
}
