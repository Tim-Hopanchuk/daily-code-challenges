/*
  No zeros for heroes
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/570a6a46455d08ff8d001002
*/

export function noBoringZeros(n: number): number {
  return Number(String(n).replaceAll(/0+$/g, ""));
}
