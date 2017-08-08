import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Item } from '../classes/item';

//ItemSearchService sends string search queries to the server's web API.
@Injectable()
export class ItemSearchService {

  constructor (private http: Http){}

  search (term: string): Observable<Item[]> {
    return this.http
      .get(`api/items/?title=${term}`)
      .map(response => response.json().data as Item[]); //extract items from the response data
  }
}
