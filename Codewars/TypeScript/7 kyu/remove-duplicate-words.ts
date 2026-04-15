/*
  Remove duplicate words
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/5b39e3772ae7545f650000fc
*/

export function removeDuplicateWords(str: string): string {
  return Array.from(new Set(str.split(" "))).join(" ");
}
