/*
  Sum Mixed Array
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/57eaeb9578748ff92a000009
*/

export function sumMix(values: any[]): number {
  const result = values.reduce((sum, current) => sum + Number(current), 0);
  return result;
}
