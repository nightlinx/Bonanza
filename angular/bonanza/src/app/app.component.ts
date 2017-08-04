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
        this.items.unshift(item); //and then adds the new hero to the array
    });
      console.log(this.items);
}

  ngOnInit(): void {
    this.getItems();
  }
}
