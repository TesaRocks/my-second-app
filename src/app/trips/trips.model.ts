import { Item } from '../shared/item.model';

export class Trip {
  public name: string;
  public description: string;
  public imagePath: string;
  public items: Item[];
  constructor(
    name: string,
    description: string,
    imagePath: string,
    items: Item[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.items = items;
  }
}
