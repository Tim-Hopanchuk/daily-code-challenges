/*
  Are they the "same"?
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/550498447451fbbd7600041c
*/

export function comp(arr1: number[] | null, arr2: number[] | null): boolean {
  if (arr1 === null || arr2 === null) {
    return false;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] ** 2 !== arr2[i]) {
      return false;
    }
  }

  return true;
}
