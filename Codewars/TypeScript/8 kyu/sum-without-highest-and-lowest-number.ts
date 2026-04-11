/*
  Sum without highest and lowest number
  
  Difficulty: 8 kyu
  Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6
*/

export function sumArray(arr: number[] | null): number {
  if (arr === null || arr.length <= 1) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const result = arr.reduce((sum, current) => sum + current, 0) - max - min;

  return result;
}
