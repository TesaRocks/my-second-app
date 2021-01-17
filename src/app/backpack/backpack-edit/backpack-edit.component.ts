import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-backpack-edit',
  templateUrl: './backpack-edit.component.html',
  styleUrls: ['./backpack-edit.component.css'],
})
export class BackpackEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Item>();
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    const newItem = new Item(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.itemAdded.emit(newItem);
  }
}
