/*
  Build a square
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
*/

export function generateShape(int: number): string {
  return ("+".repeat(int) + "\n").repeat(int).slice(0, -1);
}
