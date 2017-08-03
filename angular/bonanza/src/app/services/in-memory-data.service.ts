import { InMemoryDbService } from 'angular-in-memory-web-api';

//This file replaces mock-heroes.ts, which is now safe to delete.
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, title: 'Mr. Nice', category: 'game', medium: 'physical' },
      { id: 2, title: 'Game for you', category: 'game', medium: 'digital' },
      { id: 3, title: 'Crossroad', category: 'album', medium: 'physical' }
    ];
    return {items};
  }
}
