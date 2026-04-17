/*
  Parts of a list
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/56f3a1e899b386da78000732
*/

export function partlist(arr: string[]): string[][] {
  const result: [string, string][] = [];

  for (let i = 1; i < arr.length; i++) {
    const part1 = arr.slice(0, i).join(" ");
    const part2 = arr.slice(i).join(" ");

    result.push([part1, part2]);
  }

  return result;
}
