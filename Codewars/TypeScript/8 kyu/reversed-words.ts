/*
  Reversed Words
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/51c8991dee245d7ddf00000e
*/

export function reverseWords(text: string): string {
  return text.split(" ").reverse().join(" ");
}
