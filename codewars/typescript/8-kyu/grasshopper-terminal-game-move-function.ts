/*
  Grasshopper - Terminal game move function
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
*/

export function move(currentPosition: number, diceValue: number): number {
  return currentPosition + diceValue * 2;
}