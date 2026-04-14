/*
  Stringy Strings
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/563b74ddd19a3ad462000054
*/

export function stringy(length: number): string {
  return "10".repeat(Math.ceil(length / 2)).slice(0, length);
}
