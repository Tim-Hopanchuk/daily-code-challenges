/*
  706. Design HashMap
  
  Difficulty: Easy
  Topics: Array, Hash Table, Linked List, Design, Hash Function
  Runtime: 142 ms
  Memory: 66.2 MB

  Link: https://leetcode.com/problems/design-hashmap
*/

class MyHashMap {
  map: [number, number][] = [];

  constructor() {}

  put(key: number, value: number): void {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) {
        this.map[i][1] = value;
        return;
      }
    }

    this.map.push([key, value]);
  }

  get(key: number): number {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) {
        return this.map[i][1];
      }
    }

    return -1;
  }

  remove(key: number): void {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i][0] === key) {
        this.map.splice(i, 1);
      }
    }
  }
}
