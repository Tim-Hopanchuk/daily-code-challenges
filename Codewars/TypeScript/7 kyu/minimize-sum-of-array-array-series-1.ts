/*
  Minimize Sum Of Array (Array Series #1)
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5a523566b3bfa84c2e00010b
*/

export function minSum(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - 1 - i];
  }

  return sum;
}
