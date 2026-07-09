/*
  Form The Minimum
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5ac6932b2f317b96980000ca
*/

export const minValue = (digits: number[]): number => {
  const uniqueDigits = Array.from(new Set(digits));
  const minNumber = Number(uniqueDigits.sort((a, b) => a - b).join(""));

  return minNumber;
};
