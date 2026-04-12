/*
  What is between?
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/55ecd718f46fba02e5000029
*/

export function between(a: number, b: number): number[] {
  const result: number[] = [];

  while (a <= b) {
    result.push(a);
    a++;
  }

  return result;
}
