/*
  Factorial
  
  Difficulty: 7 kyu
  Link: https://www.codewars.com/kata/57a049e253ba33ac5e000212
*/

export function factorial(n: number) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
