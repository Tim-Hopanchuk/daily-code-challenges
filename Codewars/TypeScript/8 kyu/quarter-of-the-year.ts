/*
  Quarter of the year
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
*/

export function quarterOf(month: number): number {
  return Math.ceil(month / 3);
}
