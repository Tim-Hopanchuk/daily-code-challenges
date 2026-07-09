/*
  Small enough? - Beginner
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57cc981a58da9e302a000214
*/

export function smallEnough(numbers: number[], limit: number): boolean {
  for (let number of numbers) {
    if (number > limit) {
      return false;
    }
  }

  return true;
}
