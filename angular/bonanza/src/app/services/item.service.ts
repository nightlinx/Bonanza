import { Injectable } from '@angular/core';
import { Item } from "../classes/item";
import { ITEMS } from "./mock-items";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; //importing toPromise from the RxJS library

@Injectable()
export class ItemService {
  private heroesUrl = 'api/items';  // URL to web api

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(this.heroesUrl)  //The Angular http.get returns an RxJS Observable
               .toPromise()   //you've converted the Observable to a Promise
               .then(response => response.json().data as Item[])  //call the json method of the HTTP Response to extract the data within the response.
               //The response JSON has a single data property, which holds the array of items that the caller wants.
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
