/*
  Triangular Treasure
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/525e5a1cb735154b320002c8
*/

export function triangular(n: number): number {
  if (n <= 0) {
    return 0;
  }

  const result = (BigInt(n) * BigInt(n) + BigInt(n)) / 2n;

  return Number(result);
}


