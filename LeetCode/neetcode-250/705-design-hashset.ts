/*
  344. Reverse String
  
  Difficulty: Easy
  Topics: Array, Hash Table, Linked List, Design, Hash Function
  Runtime: 114 ms
  Memory: 67.96 MB

  Link: https://leetcode.com/problems/design-hashset
*/

class MyHashSet {
  set: number[] = [];

  constructor() {}

  add(key: number): void {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        return;
      }
    }

    this.set.push(key);
  }

  remove(key: number): void {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        this.set.splice(i, 1);
      }
    }
  }

  contains(key: number): boolean {
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
        return true;
      }
    }

    return false;
  }
}
