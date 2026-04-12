/*
  Double Char
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/56b1f01c247c01db92000076
*/

export function doubleChar(str: string): string {
  let result = "";

  for (let char of str) {
    result += char.repeat(2);
  }

  return result;
}
