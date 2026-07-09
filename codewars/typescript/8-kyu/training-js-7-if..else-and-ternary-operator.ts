/*
  Training JS #7: if..else and ternary operator
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57202aefe8d6c514300001fd
*/

export function saleHotdogs(n: number): number {
  if (n >= 10) {
    return n * 90;
  }

  if (n >= 5) {
    return n * 95;
  }

  return n * 100;
}
