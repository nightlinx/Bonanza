import { Component, Input } from '@angular/core';
import { Item } from './classes/item';

const ITEMS: Item[] = [
  { id: 1, title: 'Mr. Nice', category: 'game', medium: 'physical' },
  { id: 2, title: 'Game for you', category: 'game', medium: 'digital' },
  { id: 3, title: 'Crossroad', category: 'album', medium: 'physical' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All your games and albums';
  items = ITEMS;
}
