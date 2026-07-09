/*
  Alphabet symmetry
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
*/

export function solve(arr: string[]): number[] {
  const result = arr.map((word) => {
    return word
      .toLowerCase()
      .split("")
      .reduce((sum, current, index) => {
        if (current.charCodeAt(0) - 97 === index) {
          return sum + 1;
        }

        return sum;
      }, 0);
  });

  return result;
}
