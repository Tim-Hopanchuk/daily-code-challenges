/*
  Most digits
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/58daa7617332e59593000006
*/

export class Kata {
  static findLongest(arr: number[]): number {
    return arr.sort((a, b) => String(b).length - String(a).length)[0];
  }
}
