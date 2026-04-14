/*
  Sort Numbers
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
*/

export function solution(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}
