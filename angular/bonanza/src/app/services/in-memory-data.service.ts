import { InMemoryDbService } from 'angular-in-memory-web-api';

//This file replaces mock-heroes.ts, which is now safe to delete.
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, title: 'Kirby', category: 'game', medium: 'digital' },
      { id: 2, title: 'The wall', category: 'album', medium: 'digital' },
      { id: 12, title: 'Luigi’s Mansion', category: 'game', medium: 'physical' },
      { id: 22, title: 'Dobry wieczór', category: 'album', medium: 'digital' },
      { id: 13, title: 'Walk this way', category: 'album', medium: 'physical' },
      { id: 23, title: 'Wolf Among Us', category: 'game', medium: 'digital' },
      { id: 14, title: 'Pokemons', category: 'game', medium: 'physical' },
      { id: 24, title: 'Donkey Kong', category: 'game', medium: 'digital' },
      { id: 15, title: 'Donkey Kong music', category: 'album', medium: 'physical' },
      { id: 25, title: 'Mario soundtrack', category: 'game', medium: 'digital' },
      { id: 16, title: 'Best music', category: 'album', medium: 'physical' },
      { id: 26, title: 'The Legend of Zelda', category: 'game', medium: 'physical' },
      { id: 17, title: 'Tralalala', category: 'album', medium: 'physical' },
      { id: 27, title: 'The Legend of Zelda ', category: 'game', medium: 'physical' },
      { id: 18, title: 'Mr. Nice', category: 'game', medium: 'physical' },
      { id: 28, title: 'Music for you', category: 'album', medium: 'digital' },
      { id: 19, title: 'Mario vs. Donkey Kong', category: 'album', medium: 'physical' },
      { id: 29, title: 'Yoshi’s Island ', category: 'game', medium: 'digital' },
      { id: 10, title: 'Mr. Nice', category: 'game', medium: 'physical' },
      { id: 20, title: 'Live is strange', category: 'game', medium: 'digital' },
      { id: 1, title: 'Mr. Nice', category: 'game', medium: 'digital' },
      { id: 2, title: 'Game for you', category: 'album', medium: 'digital' },
      { id: 3, title: 'Crossroad', category: 'album', medium: 'physical' }
    ];
    return {items};
  }
}
