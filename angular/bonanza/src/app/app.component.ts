import { Component, Input, OnInit } from '@angular/core';
import { Item } from './classes/item';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {
    console.log("constructor(private itemService: ItemService) ");
  }

  ngOnInit(): void {
  }

}
