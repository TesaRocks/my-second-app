import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';

@Injectable({ providedIn: 'root' })
export class BackpackService {
  editItem = new Subject<number>();
  itemsChanged = new Subject<Item[]>();
  //private items: Item[] = [new Item('boardshorts', 3), new Item('wax', 2)];
  private items: Item[] = [];
  getItems() {
    return this.items.slice();
  }
  setItems(items: Item[]) {
    this.items = items;
    this.itemsChanged.next(this.items.slice());
  }
  addItems(it: Item) {
    this.items.push(it);
    this.itemsChanged.next(this.items.slice());
  }
  addManyItems(item: Item[]) {
    //const it = item;
    this.items.push(...item);
    this.itemsChanged.next(this.items.slice());
  }
  getItem(index: number) {
    return this.items[index];
  }
  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}
