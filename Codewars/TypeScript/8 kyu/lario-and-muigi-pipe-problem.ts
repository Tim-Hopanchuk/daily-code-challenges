/*
  Lario and Muigi Pipe Problem
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/56b29582461215098d00000f
*/

export function pipeFix(numbers: number[]): number[] {
  const result: number[] = [];

  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    result.push(i);
  }

  return result;
}
