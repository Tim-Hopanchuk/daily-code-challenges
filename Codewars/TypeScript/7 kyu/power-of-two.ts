/*
  Power of two
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/534d0a229345375d520006a0
*/

export function isPowerOfTwo(n: number): boolean {
  return Math.log2(n) % 1 === 0;
}
