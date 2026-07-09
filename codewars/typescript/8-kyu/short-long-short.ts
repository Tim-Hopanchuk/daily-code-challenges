/*
  Short Long Short
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/50654ddff44f800200000007
*/

export function shortLongShort(str1: string, str2: string): string {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  }

  return str1 + str2 + str1;
}
