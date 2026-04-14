/*
  Summing a number's digits
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/52f3149496de55aded000410
*/

export function sumDigits(number: number): number {
  const result: number = String(Math.abs(number))
    .split("")
    .reduce((sum, current) => sum + Number(current), 0);

  return result;
}
