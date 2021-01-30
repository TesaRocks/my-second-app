import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { BackpackService } from '../backpack.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SportService } from 'src/app/shared/sport.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-backpack-edit',
  templateUrl: './backpack-edit.component.html',
  styleUrls: ['./backpack-edit.component.css'],
})
export class BackpackEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') beForm: NgForm;
  editSub: Subscription;
  editMode = false;
  editIndex: number;
  editedItem: Item;
  constructor(
    private backpackService: BackpackService,
    private sportService: SportService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.editSub = this.backpackService.editItem.subscribe((index: number) => {
      this.editIndex = index;
      this.editMode = true;
      this.editedItem = this.backpackService.getItem(index);
      this.beForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }
  onAdd_UpdateItem(form: NgForm) {
    const value = form.value;
    const newItem = new Item(value.name, value.amount);
    if (this.editMode) {
      this.backpackService.updateItem(this.editIndex, newItem);
    } else {
      this.backpackService.addItems(newItem);
    }
    this.dataStorageService.storeItems();
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.beForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.backpackService.deleteItem(this.editIndex);
    this.dataStorageService.storeItems();
    this.onClear();
  }
  sport(form: NgForm) {
    let sp = form.value['sport'];

    this.sportService.sportSelected = sp;
    this.sportService.saveSport(sp);
    this.sportService.sportChosen.next(sp);
  }
  ngOnDestroy() {
    this.editSub.unsubscribe();
  }
}
