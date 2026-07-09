/*
  Fix string case
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5b180e9fedaa564a7000009a
*/

export function solve(str: string): string {
  let uppercaseCount = 0;
  let lowercaseCount = 0;

  for (let char of str) {
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    } else {
      lowercaseCount++;
    }
  }

  if (uppercaseCount > lowercaseCount) {
    return str.toUpperCase();
  }

  return str.toLowerCase();
}
