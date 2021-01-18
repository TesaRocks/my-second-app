import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-backpack-edit',
  templateUrl: './backpack-edit.component.html',
  styleUrls: ['./backpack-edit.component.css'],
})
export class BackpackEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  constructor(private backpackService: BackpackService) {}

  ngOnInit(): void {}
  onAdd() {
    const newItem = new Item(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.backpackService.addItems(newItem);
  }
}
