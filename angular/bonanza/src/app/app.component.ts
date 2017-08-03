import { Component, Input, OnInit } from '@angular/core';
import { Item } from './classes/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'All your games and albums';
  items: Item[];

  constructor(private itemService: ItemService) {
    console.log("constructor(private itemService: ItemService) ");
  }

  getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }
}
