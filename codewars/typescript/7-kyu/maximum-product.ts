/*
  Maximum Product
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5a4138acf28b82aa43000117
*/

export function adjacentElementsProduct(arr: number[]): number {
  let max = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] * arr[i - 1] > max) {
      max = arr[i] * arr[i - 1];
    }
  }

  return max;
}
