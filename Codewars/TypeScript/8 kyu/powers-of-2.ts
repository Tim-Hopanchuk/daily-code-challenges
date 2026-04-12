/*
  Powers of 2
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57a083a57cb1f31db7000028
*/

export function powersOfTwo(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }

  return result;
}
