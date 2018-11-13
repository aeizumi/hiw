import {Injectable} from "@angular/core";
import {ITEMS} from "./mock-items";

@Injectable()
export class ItemService {
  private items:any;

  constructor() {
    this.items = ITEMS;
  }

  getAll() {
    return this.items;
  }

  // getNewItem() {
  //   for (let i = 0; i < 6; i++) {
  //     return this.items[i];
  //   }
  //   return null;
  // }

  getItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === parseInt(id)) {
        return this.items[i];
      }
    }
    return null;
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
