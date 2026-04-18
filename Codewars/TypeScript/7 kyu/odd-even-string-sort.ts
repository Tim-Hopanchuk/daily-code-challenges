/*
  Odd-Even String Sort
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/580755730b5a77650500010c
*/

export function sortMyString(str: string): string {
  let evenChars = "";
  let oddChars = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenChars += str[i];
    } else {
      oddChars += str[i];
    }
  }

  return `${evenChars} ${oddChars}`;
}
