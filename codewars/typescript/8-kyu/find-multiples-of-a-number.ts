/*
  Find Multiples of a Number
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
*/

export function findMultiples(integer: number, limit: number): number[] {
  const result: number[] = [integer];

  for (let i = 2; integer * i <= limit; i++) {
    result.push(integer * i);
  }

  return result;
}
