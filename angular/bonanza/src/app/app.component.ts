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

  //add new item to item list, and call create method in item.service
  add(title: string, category: string, medium: string): void {
    title = title.trim();
    category = category.trim();
    medium = medium.trim();

    console.log("tytul gry: "+ title);
    console.log(this.items);
    if (!title) {
      return;
    }

    this.itemService.create(title, category, medium) //the handler delegates creation of the named hero to the hero service
      .then(item => {
        this.items.unshift(item); //and then adds the new item to the array
    });
    console.log(this.items);
    this.saveItem(this.itemService.create(title, category, medium));
  }

  //save item on server, and call update method from item.service
  saveItem(item): void {
    this.itemService.update(item);
  }

  //delete item from item list, and call delete method from item.service
  delete(item: Item): void {
    console.log("delete method from app.component")
    this.items = this.items.filter(h => h !== item);
    this.itemService
        .delete(item.id)
        .then(() => {
          this.items = this.items.filter(h => h !== item);
        });
}


  ngOnInit(): void {
    this.getItems();
  }
}
