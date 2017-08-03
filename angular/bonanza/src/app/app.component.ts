import { Component } from '@angular/core';
//import { Item } from '../classes/item';

export class Item {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All your games and albums';
  item: Item ={
    id: 1,
    title: 'hello game'
  };
}
