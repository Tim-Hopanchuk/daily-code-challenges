/*
  Consonant value
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/59c633e7dcc4053512000073
*/

export function solve(str: string): number {
  let maxScore = 0;
  let currentScore = 0;

  for (let char of str) {
    if (/[aeiou]/.test(char)) {
      currentScore = 0;
      continue;
    }

    currentScore += char.charCodeAt(0) - 96;

    if (currentScore > maxScore) {
      maxScore = currentScore;
    }
  }

  return maxScore;
}
