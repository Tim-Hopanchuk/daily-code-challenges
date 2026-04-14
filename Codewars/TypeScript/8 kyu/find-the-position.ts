/*
  Find the position!
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/5808e2006b65bff35500008f
*/

export function position(letter: string): string {
  const letterPosition = letter.charCodeAt(0) - 96;
  return `Position of alphabet: ${letterPosition}`;
}
