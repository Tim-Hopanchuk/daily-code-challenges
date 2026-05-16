/*
  Pyramid Array
  
  Difficulty: 6 kyu
  Link: https://www.codewars.com/kata/515f51d438015969f7000013
*/

export function pyramid(n: number): Array<Array<Number>> {
  const result: Array<Array<Number>> = [];

  for (let i = 1; i <= n; i++) {
    result.push(new Array(i).fill(1));
  }

  return result;
}
