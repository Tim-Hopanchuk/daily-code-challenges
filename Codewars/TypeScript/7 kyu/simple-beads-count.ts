/*
  Simple beads count
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/58712dfa5c538b6fc7000569
*/

export function countRedBeads(n: number): number {
  if (n < 1) {
    return 0;
  }

  return (n - 1) * 2;
}
