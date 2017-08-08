import { Injectable } from '@angular/core';
import { Item } from "../classes/item";
import { ITEMS } from "./mock-items";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; //importing toPromise from the RxJS library

@Injectable()
export class ItemService {
  private itemsUrl = 'https://example.com/api/items';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)  //The Angular http.get returns an RxJS Observable
               .toPromise()   //you've converted the Observable to a Promise
               .then(response => response.json().data as Item[])  //call the json method of the HTTP Response to extract the data within the response.
               //The response JSON has a single data property, which holds the array of items that the caller wants.
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Item)
      .catch(this.handleError);
  }

  create(title: string, category: string, medium: string): Promise<Item> {
    console.log("'create' function in itemService");
    return this.http
      .post(this.itemsUrl, JSON.stringify({title: title, category: category, medium: medium}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Item)
      .catch(this.handleError);
  }

  update (item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
