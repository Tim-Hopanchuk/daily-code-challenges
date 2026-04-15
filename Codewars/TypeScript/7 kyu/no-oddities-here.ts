/*
  No oddities here
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce
*/

export function noOdds(values: number[]): number[] {
  return values.filter((value) => value % 2 === 0);
}
