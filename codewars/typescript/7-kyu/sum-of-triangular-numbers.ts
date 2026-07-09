/*
  Sum of Triangular Numbers
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/580878d5d27b84b64c000b51
*/

export function sumTriangularNumbers(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2;
  }

  return sum;
}
