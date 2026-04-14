/*
  Maximum Multiple
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5aba780a6a176b029800041c
*/

export function maxMultiple(divisor: number, bound: number): number {
  for (let i = bound; i > divisor; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return divisor;
}
