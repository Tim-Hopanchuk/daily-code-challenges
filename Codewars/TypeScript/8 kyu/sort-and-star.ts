/*
  Sort and Star
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
*/

export function twoSort(words: string[]): string {
  return words.sort()[0].split("").join("***");
}
