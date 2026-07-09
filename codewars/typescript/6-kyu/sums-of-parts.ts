/*
  Sums of Parts
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/5ce399e0047a45001c853c2b
*/

export function partsSums(arr: number[]): number[] {
  let currentSum = arr.reduce((sum, current) => sum + current, 0);
  const result: number[] = [currentSum];

  for (let i = 0; i < arr.length; i++) {
    currentSum -= arr[i];
    result.push(currentSum);
  }

  return result;
}
