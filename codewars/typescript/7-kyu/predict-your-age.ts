/*
  Predict your age!
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5aff237c578a14752d0035ae
*/

export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number,
): number {
  const ages: number[] = Array.from(arguments);
  const result =
    Math.sqrt(ages.reduce((sum, current) => sum + current ** 2, 0)) / 2;

  return Math.floor(result);
}
