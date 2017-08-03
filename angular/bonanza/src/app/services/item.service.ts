import { Injectable } from '@angular/core';
import { Item } from "../classes/item"
import { ITEMS } from "./mock-items"

@Injectable()
export class ItemService {
  getItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  };
}
