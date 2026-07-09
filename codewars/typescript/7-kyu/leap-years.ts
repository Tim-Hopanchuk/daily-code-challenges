/*
  Leap Years
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/526c7363236867513f0005ca
*/

export function isLeap(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}
