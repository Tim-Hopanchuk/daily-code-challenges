/*
  Maximum Length Difference
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5663f5305102699bad000056
*/

export function mxdiflg(arr1: string[], arr2: string[]): number {
  if (arr1.length === 0 || arr2.length === 0) {
    return -1;
  }

  const arr1Max = Math.max(...arr1.map((value) => value.length));
  const arr1Min = Math.min(...arr1.map((value) => value.length));

  const arr2Max = Math.max(...arr2.map((value) => value.length));
  const arr2Min = Math.min(...arr2.map((value) => value.length));

  return Math.max(Math.abs(arr1Max - arr2Min), Math.abs(arr2Max - arr1Min));
}
