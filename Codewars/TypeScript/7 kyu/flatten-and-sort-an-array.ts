/*
  Flatten and sort an array
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
*/

export function flattenAndSort(arr: number[][]): number[] {
  return arr.flat().sort((a, b) => a - b);
}
