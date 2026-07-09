/*
  Which are in?
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/550554fd08b86f84fe000a58
*/

export function inArray(arr1: string[], arr2: string[]): string[] {
  const str = arr2.join(" ");
  return arr1.filter((value) => str.includes(value)).sort();
}
