/*
  Expressions Matter
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
*/

export function expressionsMatter(a: number, b: number, c: number): number {
  const results: number[] = [];

  results.push(a + b + c);
  results.push(a * b * c);
  results.push(a * (b + c));
  results.push((a + b) * c);

  return Math.max(...results);
}
