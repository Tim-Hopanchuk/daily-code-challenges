/*
  What's the real floor?
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/574b3b1599d8f897470018f6
*/

export function getRealFloor(americanFloor: number): number {
  if (americanFloor <= 0) {
    return americanFloor;
  }

  if (americanFloor > 13) {
    return americanFloor - 2;
  }

  return americanFloor - 1;
}
