/*
  Grasshopper - Terminal game combat function
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/586c1cf4b98de0399300001d
*/

export function combat(hp: number, dmg: number): number {
  return hp - dmg > 0 ? hp - dmg : 0;
}
