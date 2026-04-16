/*
  Sum of Cubes
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/59a8570b570190d313000037
*/

export function sumCubes(n: number): number {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }

  return sum;
}
