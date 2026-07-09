/*
  Find numbers which are divisible by given number
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/55edaba99da3a9c84000003b
*/

export function divisibleBy(numbers: number[], divisor: number): number[] {
  const result: number[] = [];

  for (let number of numbers) {
    if (number % divisor === 0) {
      result.push(number);
    }
  }

  return result;
}
