/*
  Two Oldest Ages
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/511f11d355fe575d2c000001
*/

export function twoOldestAges(ages: number[]): number[] {
  ages.sort((a, b) => b - a);

  return [ages[1], ages[0]];
}
